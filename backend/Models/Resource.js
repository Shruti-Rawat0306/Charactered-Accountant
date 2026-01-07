const mongoose = require("mongoose");

const resourceSchema = new mongoose.Schema(
  {
    fullName: String,
    email: String,
    status: { type: String, default: "pending" } // added
  },
  { timestamps: true }
);

module.exports = mongoose.model("Resource", resourceSchema);
