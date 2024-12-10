import mongoose from "mongoose";

const responseSchema = new mongoose.Schema({
    form: { type: mongoose.Schema.Types.ObjectId, ref: 'Form', required: true },
    data: { type: Map, of: String },
    submittedAt: { type: Date, default: Date.now },
});
export default mongoose.model("Response", responseSchema);