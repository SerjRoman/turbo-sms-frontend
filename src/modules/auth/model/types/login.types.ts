import { InferType } from "yup";
import { loginSchema } from "../schemas/login-schema";

export type LoginSchema = InferType<typeof loginSchema>;
