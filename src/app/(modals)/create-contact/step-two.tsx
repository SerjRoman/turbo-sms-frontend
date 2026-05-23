import { Input } from "@shared/ui/input";
import { Button } from "@shared/ui/button";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { FONT_SIZE } from "@shared/constants/font-size";
import { COLORS } from "@shared/constants/colors";
import { Icons } from "@shared/ui/icons";
import { apiThumbnailUrl } from "@shared/api";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { pickImage } from "@shared/tools/pick-image";
import { useCreateContactMutation } from "@modules/contact/api";

interface CreateContactTwoForm {
	name: string;
	surname: string;
	avatar: string;
}

export default function CreateContactStepTwo() {
	const params = useLocalSearchParams<{
		id: string;
		username: string;
		name: string;
		surname: string;
		avatar: string;
	}>();
	const {
		handleSubmit,
		control,
		setError,
	} = useForm<CreateContactTwoForm>({
		defaultValues: {
			name: params.name || "",
			surname: params.surname || "",
			avatar: params.avatar || "",
		},
	});
	const router = useRouter();
	const [createContact] = useCreateContactMutation();
	async function onSubmit(data: CreateContactTwoForm) {
		try {
			await createContact({
				name: data.name,
				surname: data.surname,
				avatar: data.avatar.startsWith("file") ? data.avatar : null,
				contactUserId: +params.id,
			}).unwrap();
			router.dismissTo("/contacts");
		} catch (error) {
			console.error("Failed to create contact:", error);
			setError("root", {
				message: "Failed to create contact. Please try again.",
			});
		}
	}
	return (
		<View style={styles.container}>
			<Controller
				control={control}
				name="name"
				render={({ field, fieldState }) => {
					return (
						<Input
							placeholder="Name"
							label="Contact name"
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
				name="surname"
				render={({ field, fieldState }) => {
					return (
						<Input
							placeholder="Surname"
							label="Contact surname"
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
										console.log("NO IMAGE???");
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
										uri: field.value.startsWith("file")
											? field.value
											: apiThumbnailUrl + field.value,
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
			<Button title="Add contact" onPress={handleSubmit(onSubmit)} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		backgroundColor: COLORS.white,
		alignItems: "center",
		gap: 20,
	},
	selectAvatarBlock: {
		alignItems: "center",
		justifyContent: "center",
	},
	selectAvatarButton: {
		width: 75,
		height: 75,
		position: "relative",
	},
	avatar: {
		width: "100%",
		height: "100%",
		borderRadius: 32.5,
	},
	searchIcon: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: [{ translateX: "-50%" }, { translateY: "-50%" }],
	},

	selectAvatarText: {
		fontSize: FONT_SIZE.titleMedium,
		fontWeight: 500,
	},
});
