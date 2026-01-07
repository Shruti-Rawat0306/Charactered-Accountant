const express = require("express");
const router = express.Router();
const { createResource, getAllResources } = require("../controllers/resourceController");
const Resource = require("../Models/Resource"); // make sure correct model

// Create Resource
router.post("/create", createResource);

// Get all Resources
router.get("/all", getAllResources);

// DELETE Resource by ID
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Resource.findByIdAndDelete(req.params.id); // ✅ correct model
    if (!deleted) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
