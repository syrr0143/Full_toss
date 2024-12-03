import express from "express";
import { addProduct, getProducts } from "../controllers/productController.js";
import { authenticateUser } from "../middleware/authMiddleware.js";

const productRoutes = express();
productRoutes.post("/register", authenticateUser, addProduct);
productRoutes.get("/getProducts", authenticateUser, getProducts);

export { productRoutes };
