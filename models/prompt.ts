import { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({
  prompt: {
    type: String,
    required: [true, 'Prompt is required.'],
  },
  tag: {
    type: String,
    required: [true, 'Tag is required.'],
  },
  username: {
    type: String,
    required: [true, 'Username is required.'],
  },
  email: {
    type: String,
    required: [true, 'Email is required.'],
  }
}, { timestamps: true });

const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;
