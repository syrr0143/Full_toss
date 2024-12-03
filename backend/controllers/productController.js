import Product from "../models/product.js";
import { z } from "zod";
import productValidationSchema from "../utils/validations/productValidation.js";
const addProduct = async (req, res, next) => {
  try {
    console.log("req body is ", req.body);
    const validateData = productValidationSchema.parse(req.body);
    console.log("validated data", validateData);
    const product = new Product(validateData);

    await product.save();

    return res.status(201).json({
      success: true,
      message: "Product added successfully",
      product: product,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Validation error
      return res.status(400).json({
        success: false,
        message: "Validation error while adding product",
        errors: error.errors, // Provide detailed validation issues
      });
    }

    // Server error
    res.status(500).json({
      success: false,
      message: "Server error while adding product",
      error: error.message,
    });
  }
};

const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    return res.status(200).json({
      success: true,
      message: "products fetched suceessfully",
      products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error while fetching products",
      error: error.message,
    });
  }
};

export { addProduct, getProducts };
