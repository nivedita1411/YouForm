import  Form from "../models/formModel.js";

// CRUD Operations

// Create a new form
export const createForm = async (req, res) => {
  try {
    const { title, description, elements, user, published } = req.body;

    const newForm = new Form({ title, description, elements, user, published });
    const savedForm = await newForm.save();

    res.status(201).json(savedForm);
  } catch (error) {
    console.error("Error creating form:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Get all forms
export const getAllForms = async (req, res) => {
  try {
    const forms = await Form.find();
    res.status(200).json(forms);
  } catch (error) {
    console.error("Error fetching forms:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Get forms by user
export const getFormsByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const forms = await Form.find({ user: userId });
    res.status(200).json(forms);
  } catch (error) {
    console.error("Error fetching forms by user:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Get a single form by ID
export const getFormById = async (req, res) => {
  const { id } = req.params;

  try {
    const form = await Form.findById(id);

    if (!form) {
      return res.status(404).json({ error: "Form not found" });
    }

    res.status(200).json(form);
  } catch (error) {
    console.error("Error fetching form by ID:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Update a form
export const updateForm = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedForm = await Form.findByIdAndUpdate(id, updates, { new: true, runValidators: true });

    if (!updatedForm) {
      return res.status(404).json({ error: "Form not found" });
    }

    res.status(200).json(updatedForm);
  } catch (error) {
    console.error("Error updating form:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Delete a form
export const deleteForm = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedForm = await Form.findByIdAndDelete(id);

    if (!deletedForm) {
      return res.status(404).json({ error: "Form not found" });
    }

    res.status(200).json({ message: "Form deleted successfully" });
  } catch (error) {
    console.error("Error deleting form:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Toggle form publish status
export const toggleFormPublish = async (req, res) => {
  const { id } = req.params;

  try {
    const form = await Form.findById(id);

    if (!form) {
      return res.status(404).json({ error: "Form not found" });
    }

    form.published = !form.published;
    const updatedForm = await form.save();

    res.status(200).json(updatedForm);
  } catch (error) {
    console.error("Error toggling form publish status:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Export All Operations and the Model
// export default {

//   createForm,
//   getAllForms,
//   getFormsByUser,
//   getFormById,
//   updateForm,
//   deleteForm,
//   toggleFormPublish,
// };
