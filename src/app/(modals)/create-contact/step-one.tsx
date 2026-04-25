import { Input } from "@shared/ui/input";
import { Button } from "@shared/ui/button";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { useState, useEffect } from "react";
import { FONT_SIZE } from "@shared/constants/font-size";
import { COLORS } from "@shared/constants/colors";
import { useLazyGetUserQuery } from "@modules/contact";
import { Icons } from "@shared/ui/icons";
import { apiThumbnailUrl } from "@shared/api";
import { useUserContext } from "@modules/auth";
import { useRouter } from "expo-router";

export default function CreateContactStepOne() {
	const router = useRouter();
	const { user } = useUserContext();
	const [username, setUsername] = useState<string>("");
	const [getUserQuery, { data, error, isFetching, isSuccess, reset }] =
		useLazyGetUserQuery();
	useEffect(() => {
		if (username && user?.username !== username) getUserQuery({ username });
		else {
			reset();
		}
	}, [username]);
	const isNotFound =
		error && username.length > 0
			? "status" in error && error.status === 404
			: false;
	return (
		<View style={styles.container}>
			<Input
				label="Username"
				labelStyle={styles.labelStyle}
				inputContainerStyle={styles.inputContainer}
				style={styles.input}
				onChangeText={(text) => setUsername(text)}
				placeholder="Search..."
				iconLeft={<Icons.SearchIcon />}
			/>
			{data && isSuccess && (
				<View style={styles.userBlock}>
					<Image
						style={styles.userAvatar}
						placeholder={require("@assets/default-user.png")}
						placeholderContentFit="cover"
						contentFit="cover"
						source={{ uri: apiThumbnailUrl + data.avatar }}
					/>
					<Text style={styles.username}>{data.username}</Text>
				</View>
			)}
			{isNotFound && (
				<View style={styles.notFoundBlock}>
					<View style={styles.notFoundIcon}>
						<Icons.ErrorIcon width="100%" height="100%" />
					</View>
					<Text style={styles.notFoundText}>User not found!</Text>
				</View>
			)}
			{user?.username === username && (
				<Text>You cannot find yourself!</Text>
			)}
			<Button
				title="Select"
				disabled={!isSuccess}
				isLoading={isFetching}
				onPress={() => {
					if (!data) return;
					router.push({
						pathname: "/create-contact/step-two",
						params: {
							id: data.id,
							username: data.username,
							name: data.name,
							surname: data.surname,
							avatar: data.avatar,
						},
					});
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		paddingVertical: 10,
		gap: 30,
		flex: 1,
		alignItems: "center",
	},
	inputContainer: {
		width: "100%",
	},
	labelStyle: {
		fontSize: FONT_SIZE.titleLarge,
		fontWeight: 400,
	},
	input: {
		fontSize: FONT_SIZE.titleMedium,
	},
	userBlock: {
		borderBottomColor: COLORS.grey,
		borderBottomWidth: 1,
		padding: 20,
	},
	userAvatar: {
		width: 150,
		height: 150,
		borderRadius: 25,
	},
	username: {
		fontSize: FONT_SIZE.titleLarge,
		textAlign: "center",
	},
	notFoundBlock: {
		gap: 10,
		flexDirection: "row",
	},
	notFoundIcon: {
		width: 26.6666666667,
		height: 26.6666666667,
	},
	notFoundText: {
		color: COLORS.error,
		fontSize: FONT_SIZE.titleLarge,
	},
});
