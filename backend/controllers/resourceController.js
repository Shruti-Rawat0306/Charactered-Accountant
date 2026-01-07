const Resource = require("../Models/Resource");

const createResource = async (req, res) => {
  try {
    const resource = new Resource(req.body);
    await resource.save();

    res.status(201).json({
      success: true,
      message: "Resource request saved"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
const getAllResources = async (req, res) => {
  try {
    const resources = await Resource.find().sort({ createdAt: -1 });
    res.status(200).json(resources);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createResource, getAllResources };

