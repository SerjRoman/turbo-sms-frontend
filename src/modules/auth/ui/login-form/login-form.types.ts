import { InferType } from "yup";
import { loginSchema } from "../../model/login-schema";

export type LoginFormState = InferType<typeof loginSchema>;
