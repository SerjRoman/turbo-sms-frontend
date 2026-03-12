import { Text, View } from "react-native";
import { styles } from "./login-form.styles";
import { Button } from "@shared/ui/button";
import { Input } from "@shared/ui/input";
import { Icons } from "@shared/ui/icons";
import { useForm, Controller } from "react-hook-form";
import { LoginFormState } from "./login-form.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../model/login-schema";

export function LoginForm() {
	const { handleSubmit, control } = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
		resolver: yupResolver(loginSchema),
	});

	function onSubmit(data: LoginFormState) {
		console.log(data);
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
			</View>
		</View>
	);
}
