import { InferType } from "yup";
import { registerSchema } from "../schemas";

export type RegisterStepOneSchema = InferType<typeof registerSchema.stepOne>;
export type RegisterStepTwoSchema = InferType<typeof registerSchema.stepTwo>;
