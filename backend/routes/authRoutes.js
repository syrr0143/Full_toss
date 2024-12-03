import express from "express";
import {
  registerUser,
  loginuser,
  updateTeam,
} from "../controllers/authController.js";
import { authenticateUser } from "../middleware/authMiddleware.js";

const authRoutes = express.Router();

authRoutes.post("/register", registerUser);
authRoutes.post("/login", loginuser);
authRoutes.post("/changeTeam", authenticateUser, updateTeam);

export { authRoutes };
