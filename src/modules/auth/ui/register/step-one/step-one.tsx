import { View } from "react-native";
import { Button } from "@shared/ui/button";
import { Input } from "@shared/ui/input";
import { Icons } from "@shared/ui/icons";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../../model/schemas";
import type { RegisterStepOneSchema } from "../../../model/types";
import { styles } from "./step-one.styles";
import { useRouter } from "expo-router";

export function StepOne() {
	const { handleSubmit, control } = useForm({
		defaultValues: {
			email: "",
			password: "",
			username: "",
		},
		resolver: yupResolver(registerSchema.stepOne),
	});
	const router = useRouter();

	function onSubmit(data: RegisterStepOneSchema) {
		router.push({
			pathname: "/register/step-two",
			params: {
				...data,
			},
		});
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
					name="username"
					render={({ field, fieldState }) => {
						return (
							<Input
								iconLeft={<Icons.EmailIcon />}
								placeholder="Your username"
								label="Username"
								autoCapitalize={"none"}
								autoComplete="email"
								autoCorrect={false}
								inputMode="text"
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
				<Button
					title={"Continue..."}
					onPress={handleSubmit(onSubmit)}
				/>
			</View>
		</View>
	);
}
