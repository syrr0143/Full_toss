import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    password: {
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

export default mongoose.model("User", userSchema);
