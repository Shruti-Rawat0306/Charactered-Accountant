const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    contact: String,
    service: String,
    message: String,
    status: { type: String, default: "new" } // added
  },
  { timestamps: true }
);

// Fix OverwriteModelError
const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

module.exports = Contact;
