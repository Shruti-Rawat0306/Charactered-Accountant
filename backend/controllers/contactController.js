const Contact = require("../Models/Contact");

const createContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();

    res.status(201).json({
      success: true,
      message: "Contact saved successfully"
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createContact, getAllContacts };

