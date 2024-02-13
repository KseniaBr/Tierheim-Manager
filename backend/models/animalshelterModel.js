import mongoose from "mongoose";

const animalshelterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactPerson: { type: String, required: true },
  budget: { type: Number, required: true },
  employees: { type: Number, required: true },
  dogs: { type: Number, required: true },
  cats: { type: Number, required: true },
  rodents: { type: Number, required: true },
  birds: { type: Number, required: true },
  other: { type: Number, required: true },
  image: { type: String },
  address: { type: String, required: true },
});

export const User = mongoose.model("User", userSchema);
