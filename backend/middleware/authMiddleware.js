import jwt from "jsonwebtoken";
import User from "../models/user.js";

const authenticateUser = async (req, res, next) => {
  try {
    // Extract the token
    const authHeader = req.headers.authorization; // Check for Authorization header
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access. Please login first.",
      });
    }

    const token = authHeader.split(" ")[1];
    console.log("Token from middleware:", token);

    // Verify the token
    console.log("jwt secret is ", process.env.Jwt_secret);
    const decoded = jwt.verify(token, process.env.Jwt_secret);
    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: "Invalid token.",
      });
    }

    // Find the user in the database
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    // Attach user to request object
    req.user = user;
    next();
  } catch (error) {
    console.error("Error in authMiddleware:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to authenticate user.",
      error: error.message,
    });
  }
};

export { authenticateUser };
