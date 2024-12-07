import Response from "../models/responseModel";

// Controller Functions

// Create a Response
const createResponse = async (req, res) => {
  try {
    const { form, data } = req.body;

    // Create a new response
    const newResponse = new Response({ form, data });
    const savedResponse = await newResponse.save();

    res.status(201).json(savedResponse);
  } catch (error) {
    console.error("Error creating response:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Get All Responses
const getAllResponses = async (req, res) => {
  try {
    const responses = await Response.find().populate("form");
    res.status(200).json(responses);
  } catch (error) {
    console.error("Error fetching responses:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Get Responses by Form
const getResponsesByForm = async (req, res) => {
  const { formId } = req.params;

  try {
    const responses = await Response.find({ form: formId }).populate("form");

    if (responses.length === 0) {
      return res.status(404).json({ error: "No responses found for the given form" });
    }

    res.status(200).json(responses);
  } catch (error) {
    console.error("Error fetching responses for form:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Get a Single Response by ID
const getResponseById = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await Response.findById(id).populate("form");

    if (!response) {
      return res.status(404).json({ error: "Response not found" });
    }

    res.status(200).json(response);
  } catch (error) {
    console.error("Error fetching response by ID:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Update a Response
const updateResponse = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedResponse = await Response.findByIdAndUpdate(id, updates, { new: true, runValidators: true });

    if (!updatedResponse) {
      return res.status(404).json({ error: "Response not found" });
    }

    res.status(200).json(updatedResponse);
  } catch (error) {
    console.error("Error updating response:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Delete a Response
const deleteResponse = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedResponse = await Response.findByIdAndDelete(id);

    if (!deletedResponse) {
      return res.status(404).json({ error: "Response not found" });
    }

    res.status(200).json({ message: "Response deleted successfully" });
  } catch (error) {
    console.error("Error deleting response:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Export the model and controllers
module.exports = {
  Response,
  createResponse,
  getAllResponses,
  getResponsesByForm,
  getResponseById,
  updateResponse,
  deleteResponse,
};
