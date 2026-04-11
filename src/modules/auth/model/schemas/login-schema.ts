import * as yup from "yup";

export const loginSchema = yup.object({
	email: yup
		.string()
		.email("Email field must be a valid email")
		.required("Field is required"),
	password: yup
		.string()
		.min(6, "Password length > 6")
		.max(50, "Password length < 50")
		.required("Field is required"),
});
