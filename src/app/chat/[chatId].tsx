import { ClientSocket } from "@shared/api";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function ChatScreen() {
	const params = useLocalSearchParams<{ chatId: string }>();
	const chatId = Number(params.chatId);
	const [page, setPage] = useState(1);
	useEffect(() => {
		if (isNaN(chatId)) return;
		ClientSocket.emit("joinChat", { chatId }, (response) => {
			if (response.status === "ok") {
				console.log("Successfully joined chat");
			} else {
				console.error(
					"Failed to join chat:",
					response.message || "Unknown error",
				);
			}
		});
		return () => {
			ClientSocket.emit("leaveChat", { chatId });
		};
	}, [chatId]);
	return (
		<View
			style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
		>
			<Text>Chat Screen</Text>
		</View>
	);
}
