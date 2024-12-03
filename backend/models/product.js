import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    image: {
      type: String,
      required: true,
    },
    team: {
      type: String,
      required: true,
      enum: ["MI", "RCB", "CSK", "LSG", "GT", "SRH", "KKR", "DC", "PBKS", "RR"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Products", productSchema);
