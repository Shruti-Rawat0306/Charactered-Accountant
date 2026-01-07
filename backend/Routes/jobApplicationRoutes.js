const express = require("express");
const router = express.Router();
const multer = require("multer");
const JobApplication = require("../Models/JobApplication");

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // make sure this folder exists
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

// POST /api/job-applications/apply
router.post("/apply", upload.single("resume"), async (req, res) => {
  try {
    const {
      jobTitle,
      name,
      email,
      contact,
      experience,
      currentSalary,
      expectedSalary,
      location,
      additionalInfo,
    } = req.body;

    if (!req.file) return res.status(400).json({ error: "Resume is required" });

    const jobApp = new JobApplication({
      jobTitle,
      name,
      email,
      contact,
      experience,
      currentSalary,
      expectedSalary,
      location,
      additionalInfo,
      resume: req.file.filename,
    });

    await jobApp.save();
    res.status(201).json({ message: "Job application submitted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});
// GET all job applications
router.get("/all", async (req, res) => {
  try {
    const applications = await JobApplication.find().sort({ createdAt: -1 });
    res.json(applications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE a job application by ID
router.delete("/:id", async (req, res) => {
  try {
    await JobApplication.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});
// MARK as completed
router.put("/complete/:id", async (req, res) => {
  try {
    const updated = await JobApplication.findByIdAndUpdate(
      req.params.id,
      { status: "completed" },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
