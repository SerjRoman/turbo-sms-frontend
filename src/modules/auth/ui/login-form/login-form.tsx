import { Text, View } from "react-native";
import { styles } from "./login-form.styles";
import { Button } from "@shared/ui/button";
import { Input } from "@shared/ui/input";
import { Icons } from "@shared/ui/icons";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { LoginSchema } from "../../model/types";
import { loginSchema } from "../../model/schemas";
import { useLoginMutation } from "../../api";
import { useUserContext } from "../../context";
import { useEffect } from "react";

export function LoginForm() {
	const [loginMutation, { error }] = useLoginMutation();
	const { setToken } = useUserContext();
	const {
		handleSubmit,
		control,
		setError,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
		resolver: yupResolver(loginSchema),
	});

	useEffect(() => {
		if (!error) return;
		let message = "Unhandled error";
		if (error && typeof error === "object" && "status" in error) {
			switch (error.status) {
				case 404:
					message = "User does not exist";
					break;
				case 401:
					message = "Password is wrong";
					break;
				case 500:
					message = "Server error";
					break;
				default:
					message = "Unhandled error";
					break;
			}
		}
		setError("root", { message });
	}, [error]);

	async function onSubmit(data: LoginSchema) {
		console.log(data);
		try {
			const { token } = await loginMutation(data).unwrap();
			setToken(token);
		} catch (error) {
			console.log(error);
			let message = "Unhandled error";
			if (error && typeof error === "object" && "status" in error) {
				switch (error.status) {
					case 404:
						message = "User does not exist";
						break;
					case 401:
						message = "Password is wrong";
						break;
					case 500:
						message = "Server error";
						break;
					default:
						message = "Unhandled error";
						break;
				}
			}
			setError("root", { message });
		}
	}
	return (
		<View style={styles.container}>
			<View style={styles.inputs}>
				<Controller
					control={control}
					name="email"
					render={({ field, fieldState }) => {
						return (
							<Input
								iconLeft={<Icons.EmailIcon />}
								placeholder="Your email"
								label="Email"
								autoCapitalize={"none"}
								autoComplete="email"
								autoCorrect={false}
								inputMode="email"
								onChangeText={field.onChange}
								onBlur={field.onBlur}
								value={field.value}
								error={fieldState.error?.message}
							/>
						);
					}}
				/>

				<Controller
					control={control}
					name="password"
					render={({ field, fieldState }) => {
						return (
							<Input.Password
								placeholder="Your password"
								label="Password"
								autoCorrect={false}
								autoCapitalize={"none"}
								autoComplete={"password"}
								onChangeText={field.onChange}
								onBlur={field.onBlur}
								value={field.value}
								error={fieldState.error?.message}
							/>
						);
					}}
				/>
			</View>

			<View style={styles.submitBlock}>
				<Button title={"Login"} onPress={handleSubmit(onSubmit)} />
				{errors.root?.message && <Text>{errors.root?.message}</Text>}
			</View>
		</View>
	);
}
