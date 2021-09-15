import mongoose from "mongoose";

export const Grocery = mongoose.model(
  "grocery",
  new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
  })
);
