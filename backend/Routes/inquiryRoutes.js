const express = require("express");
const router = express.Router();
const Inquiry = require("../Models/Inquiry");

// POST - Save inquiry
router.post("/", async (req, res) => {
  try {
    const inquiry = new Inquiry(req.body);
    await inquiry.save();
    res.status(201).json({ message: "We will contact you soon" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET all inquiries
router.get("/all", async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.json(inquiries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE an inquiry by ID
router.delete("/:id", async (req, res) => {
  try {
    await Inquiry.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});



module.exports = router;
