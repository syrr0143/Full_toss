import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
import { authRoutes } from "./routes/authRoutes.js";
import { productRoutes } from "./routes/productRoutes.js";
import cors from "cors";
dotenv.config();

connectDb();

const app = express();
app.use(express.json());
app.use(cors());

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/products", productRoutes);

export { app };
