const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: String,
      required: true,
    },
    service: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
     status: { type: String, default: "pending" }, // added
  },
  { timestamps: true }
);

module.exports = mongoose.model("Inquiry", inquirySchema);
