import { z } from "zod";

const productValidationSchema = z.object({
  name: z
    .string()
    .min(3, "Product name is required and should be atleast 3 char long")
    .trim(),
  description: z.string().min(10, "Description must be at least 10 char long"),
  price: z.number().min(0, "Price must be positive"),
  image: z.string().url("Invalid image url"),
  team: z.enum([
    "MI",
    "RCB",
    "CSK",
    "LSG",
    "GT",
    "SRH",
    "KKR",
    "DC",
    "PBKS",
    "RR",
  ]),
});

export default productValidationSchema;
