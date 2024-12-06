const responseSchema = new Schema({
    form: { type: Schema.Types.ObjectId, ref: 'Form', required: true },
    data: { type: Map, of: String },
    submittedAt: { type: Date, default: Date.now },
  });