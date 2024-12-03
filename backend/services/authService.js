import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const hashPassword = async (password) => await bcrypt.hash(password, 10);
const comparePassword = async (password, hash) =>
  await bcrypt.compare(password, hash);

const generateToken = async (userId) =>
  jwt.sign({ userId }, process.env.Jwt_secret, { expiresIn: "1d" });

export { hashPassword, generateToken, comparePassword };
