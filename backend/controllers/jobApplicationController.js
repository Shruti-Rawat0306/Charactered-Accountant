const JobApplication = require("../Models/JobApplication");

exports.applyJob = async (req, res) => {
  try {
    const {
      jobId,
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

    const resumePath = req.file.path;

    const application = await JobApplication.create({
      jobId,
      jobTitle,
      name,
      email,
      contact,
      experience,
      currentSalary,
      expectedSalary,
      location,
      additionalInfo,
      resume: resumePath,
    });

    res.status(201).json({
      success: true,
      message: "Job applied successfully",
      data: application,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
