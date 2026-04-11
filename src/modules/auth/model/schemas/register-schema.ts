import * as yup from "yup";

export const registerSchema = {
	stepOne: yup.object({
		email: yup
			.string()
			.required("Field is required!")
			.email("Email field must be a valid email!"),
		username: yup.string().required("Field is required!"),
		password: yup
			.string()
			.min(6, "Password length > 6")
			.max(50, "Password length < 50")
			.required("Field is required"),
	}),
	stepTwo: yup.object({
		name: yup.string().required("Field is required!"),
		surname: yup.string().required("Field is required!"),
		avatar: yup.string().nullable().notRequired(),
	}),
};
