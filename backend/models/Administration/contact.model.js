import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  contact_number: String,
  mobile_number: {
    type: String,
    unique: true,
  },
  effective_from: {
    type: Date,
  },
});

export const Contact = mongoose.model("Contact", contactSchema);
