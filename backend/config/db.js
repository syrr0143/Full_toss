import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("mongodb connection successful");
  } catch (error) {
    console.log("Mongodb connection failed", error.message);
    process.exit(1);
  }
};

export { connectDb };
