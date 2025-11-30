// GetInTouch.model.js
import mongoose from "mongoose";

const getInTouchSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },          // Added
  course: { type: String, required: true },         // Added
  organization: { type: String },                   // Already exists but kept
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

export default mongoose.model("GetInTouch", getInTouchSchema);
