const mongoose = require("mongoose");

const jobApplicationSchema = new mongoose.Schema(
  {
    jobTitle: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: String, required: true },
    experience: { type: Number, required: true },
    currentSalary: { type: Number },
    expectedSalary: { type: Number },
    location: { type: String },
    additionalInfo: { type: String },
    resume: { type: String, required: true }, // file path
    status: {
      type: String,
      enum: ["Applied", "Reviewed", "Shortlisted", "Rejected"],
      default: "Applied",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("JobApplication", jobApplicationSchema);
