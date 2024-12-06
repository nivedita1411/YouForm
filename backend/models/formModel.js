import mongoose from "mongoose";

const formSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    elements: [{ //input field, radio, dropdown, buttons, etc
      type: { type: String, required: true },
      label: { type: String, required: true },
      options: [{ type: String }],
      required: { type: Boolean, default: false },
    }],
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    url: { type: String, unique: true },
    published: { type: Boolean, default: false },
  }, { timestamps: true });
  
  module.exports = mongoose.model('Form', formSchema);

  const Form = require('./models/Form');

// const getFormsByUser = async (userId) => {
//   try {
//     const forms = await Form.find({ user: userId });
//     return forms;
//   } catch (error) {
//     console.error('Error fetching forms:', error);
//     throw error;
//   }
// };

  