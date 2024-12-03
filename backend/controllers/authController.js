import User from "../models/user.js";
import {
  comparePassword,
  generateToken,
  hashPassword,
} from "../services/authService.js";
import { assignTeam, teamValidation } from "../utils/teamAssignment.js";
import { z } from "zod";
import userValidationSchema from "../utils/validations/userValidation.js";

const registerUser = async (req, res, next) => {
  try {
    const validateData = userValidationSchema
      .omit({ team: true })
      .parse(req.body);

    const { name, email, password } = validateData;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message:
          "User with the same email already exists. Please use a new email.",
      });
    }

    const hashedPassword = await hashPassword(password);
    const assignedTeam = assignTeam();
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      team: assignedTeam,
    });

    await newUser.save();
    const token = await generateToken(newUser._id);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      token: token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        team: newUser.team,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: "validation error in register user",
        errors: error.errors,
      });
    }
    res.status(500).json({
      success: false,
      message: "Server error while authenticating user for registration",
      error: error.message,
    });
  }
};

const loginuser = async (req, res, next) => {
  try {
    const validateData = userValidationSchema
      .pick({ email: true, password: true })
      .parse(req.body);

    const { email, password } = validateData;

    const userFound = await User.findOne({ email });
    if (!userFound) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials. Please check your email and password.",
      });
    }

    const isMatch = await comparePassword(password, userFound.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials. Please check your email and password.",
      });
    }

    const token = await generateToken(userFound._id);

    return res.status(200).json({
      success: true,
      message: "Login Sucessfull",
      token,
      user: {
        id: userFound._id,
        name: userFound.name,
        email: userFound.email,
        team: userFound?.team,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        errors: error.errors,
      });
    }
    res.status(500).json({
      success: false,
      message: "Server error while authenticating user for registration",
      error: error.message,
    });
  }
};

const updateTeam = async (req, res, next) => {
  try {
    let { newTeam } = req.body;
    newTeam = newTeam.toUpperCase();
    const validNewTeam = teamValidation(newTeam);
    if (!newTeam || !validNewTeam) {
      return res.status(400).json({
        success: false,
        message: "please chose a valid team",
      });
    }
    const user = req.user;
    const updatedUser = await User.findOneAndUpdate(
      { email: user.email },
      { $set: { team: newTeam } },
      { new: true }
    ).select("-password");

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }
    return res.status(200).json({
      success: true,
      message: "team updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "Server error while changing team",
    });
  }
};

export { registerUser, loginuser, updateTeam };
