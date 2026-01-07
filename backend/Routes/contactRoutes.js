const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact"); // <-- Add this
const { createContact, getAllContacts } = require("../controllers/contactController");

router.post("/create", createContact);
router.get("/all", getAllContacts);

// DELETE contact by ID
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
