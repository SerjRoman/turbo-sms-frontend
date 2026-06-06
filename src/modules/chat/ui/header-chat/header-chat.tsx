import { Header } from "@shared/ui/header";
import { Image } from "expo-image";
import { styles } from "./header-chat.styles";
import { View, Text, TouchableOpacity } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { Icons } from "@shared/ui/icons";
import { COLORS } from "@shared/constants/colors";
import { ClientSocket } from "@shared/api";
import { useEffect, useState } from "react";

function subscribeToUserStatusUpdates(
	callback: (payload: { userId: number; status: string }) => void,
) {
	ClientSocket.on("userStatusUpdated", callback);
}
function unsubscribeFromUserStatusUpdates(
	callback: (payload: { userId: number; status: string }) => void,
) {
	ClientSocket.off("userStatusUpdated", callback);
}

function subscribeAndGetInitialStatuses(
	userIds: number[],
	response: ({
		statuses,
	}: {
		statuses: { userId: number; status: string }[];
	}) => void,
) {
	ClientSocket.emit("subscribeAndGetInitialStatuses", { userIds }, response);
}

export function HeaderChat() {
	const params = useLocalSearchParams<{
		userId: string;
		chatId: string;
		fullname: string;
		avatar: string;
		isOnline: string;
	}>();
	const [isOnline, setIsOnline] = useState<boolean>(
		params.isOnline === "true",
	);
	const fullname = params.fullname;
	useEffect(() => {
		subscribeAndGetInitialStatuses(
			[Number(params.userId)],
			({ statuses }) => {
				for (const status of statuses) {
					if (status.userId === Number(params.userId)) {
						setIsOnline(status.status === "online");
					}
				}
			},
		);
		function handleUpdateUserStatus(payload: {
			userId: number;
			status: string;
		}) {
			if (payload.userId === Number(params.userId)) {
				setIsOnline(payload.status === "online");
			}
		}
		subscribeToUserStatusUpdates(handleUpdateUserStatus);
		return () => {
			unsubscribeFromUserStatusUpdates(handleUpdateUserStatus);
		};
	}, []);
	return (
		<Header
			bottom={
				<View style={styles.container}>
					<TouchableOpacity
						onPress={() => {
							if (router.canGoBack()) router.back();
						}}
						style={styles.button}
					>
						<Icons.ArrowBackIcon fill={COLORS.brownPrimary} />
						<Text style={styles.text}>Back</Text>
					</TouchableOpacity>
					<View style={styles.fullnameContainer}>
						<Text style={styles.nameChat}>{fullname}</Text>
						<View style={styles.lowerMiddlePart}>
							{isOnline && <View style={styles.indicator} />}
							<Text style={styles.onlineStatusText}>
								{isOnline ? "Online" : "Offline"}
							</Text>
						</View>
					</View>
					<Image
						source={require("@assets/default-user.png")}
						style={styles.avatar}
					/>
				</View>
			}
		/>
	);
}
