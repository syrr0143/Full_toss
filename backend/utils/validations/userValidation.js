import { z } from "zod";

const userValidationSchema = z.object({
  name: z.string().min(3, "Name should be at least 3 char long ").trim(),
  email: z.string().email("Invalid email address").trim(),
  password: z.string().min(6, "Password must be atlest 6 character"),
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

export default userValidationSchema;
