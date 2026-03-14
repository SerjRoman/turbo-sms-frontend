import { Text, TouchableOpacity, View } from "react-native";
import { Button } from "@shared/ui/button";
import { Input } from "@shared/ui/input";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { styles } from "./step-two.styles";
import {
	registerSchema,
	type RegisterStepOneSchema,
	type RegisterStepTwoSchema,
} from "../../../model";
import { useLocalSearchParams } from "expo-router";
import { Images } from "@shared/ui/images";
import { Image } from "expo-image";
import { Icons } from "@shared/ui/icons";

export function StepTwo() {
	const params = useLocalSearchParams<RegisterStepOneSchema>();
	const { handleSubmit, control } = useForm({
		defaultValues: {
			name: "",
			surname: "",
			avatar: null,
		},
		resolver: yupResolver(registerSchema.stepTwo),
	});

	function onSubmit(data: RegisterStepTwoSchema) {
		const finalData = {
			...data,
			...params,
		};
		console.log(finalData);
	}
	return (
		<View style={styles.container}>
			<View style={styles.inputs}>
				<Controller
					control={control}
					name="name"
					render={({ field, fieldState }) => {
						return (
							<Input
								placeholder="First name"
								label="Name"
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
					name="surname"
					render={({ field, fieldState }) => {
						return (
							<Input
								placeholder="Surname"
								label="surname"
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
				<Controller
					control={control}
					name="avatar"
					render={({ field, fieldState }) => {
						return (
							<View style={styles.selectAvatarBlock}>
								<TouchableOpacity
									style={styles.selectAvatarButton}
								>
									<Image
										placeholder={require("@assets/default-user.png")}
										placeholderContentFit="cover"
										style={styles.avatar}
									/>
									<Icons.SearchIcon
										style={styles.searchIcon}
									/>
								</TouchableOpacity>
								<Text style={styles.selectAvatarText}>
									Select avatar
								</Text>
							</View>
						);
					}}
				/>
			</View>

			<View style={styles.submitBlock}>
				<Button title={"Register"} onPress={handleSubmit(onSubmit)} />
			</View>
		</View>
	);
}
