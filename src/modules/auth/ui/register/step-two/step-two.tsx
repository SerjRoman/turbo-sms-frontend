import { Alert, Text, TouchableOpacity, View } from "react-native";
import { Button } from "@shared/ui/button";
import { Input } from "@shared/ui/input";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { styles } from "./step-two.styles";
import {
	registerSchema,
	RegisterStepOneSchema,
	type RegisterStepTwoSchema,
} from "../../../model";
import { router, useLocalSearchParams } from "expo-router";
import { Image } from "expo-image";
import { Icons } from "@shared/ui/icons";
import { pickImage } from "@shared/tools/pick-image";
import { useRegisterMutation } from "../../../api";
import { useUserContext } from "../../../context";
import { useEffect } from "react";

export function StepTwo() {
	const params = useLocalSearchParams<RegisterStepOneSchema>();
	const [registerMutation, { error }] = useRegisterMutation();
	const { setToken } = useUserContext();
	const {
		handleSubmit,
		control,
		setError,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: "",
			surname: "",
			avatar: null,
		},
		resolver: yupResolver(registerSchema.stepTwo),
	});
	useEffect(() => {
		if (!error) return;
		let message = "Unhandled error";
		if (error && typeof error === "object" && "status" in error) {
			switch (error.status) {
				case 409:
					message = "User with such email already exists!";
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

	async function onSubmit(data: RegisterStepTwoSchema) {
		const finalData = {
			...data,
			...params,
			avatar: data.avatar || null,
		};
		console.log(finalData);
		try {
			const { token } = await registerMutation(finalData).unwrap();
			setToken(token);
		} catch (error) {
			console.error(error);
		}
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
									onPress={async () => {
										const result = await pickImage(false, {
											selectionLimit: 1,
											allowsMultipleSelection: false,
											allowsEditing: false,
											mediaTypes: "images",
										});
										if (result.status === "error") {
											Alert.alert(
												"Avatar upload failed",
												result.message,
											);
											return;
										}
										const avatar = result.assets[0];
										field.onChange(avatar.uri);
									}}
								>
									<Image
										placeholder={require("@assets/default-user.png")}
										placeholderContentFit="cover"
										source={{
											uri: field.value || undefined,
										}}
										style={styles.avatar}
									/>
									{!field.value && (
										<Icons.SearchIcon
											style={styles.searchIcon}
										/>
									)}
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
				<TouchableOpacity
					onPress={() => {
						router.back();
					}}
				>
					<Text>Go Back</Text>
				</TouchableOpacity>
				{errors.root?.message && <Text>{errors.root?.message}</Text>}
			</View>
		</View>
	);
}
