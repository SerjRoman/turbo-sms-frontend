import { useUserContext } from "@modules/auth";
import {
	useGetMessagesByChatQuery,
	MessageList,
	SendMessageBlock,
} from "@modules/chat";
import { ClientSocket } from "@shared/api";
import { COLORS } from "@shared/constants/colors";
import { Redirect, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ChatScreen() {
	const { user } = useUserContext();
	const params = useLocalSearchParams<{ chatId: string }>();
	const chatId = Number(params.chatId);
	const [page, setPage] = useState(1);
	const { data } = useGetMessagesByChatQuery({
		chatId,
		take: 15,
		page,
	});
	const messages = data?.data || [];
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
	if (!user) {
		return <Redirect href={"/login"} />;
	}
	return (
		<SafeAreaView
			edges={["bottom"]}
			style={{ flex: 1, backgroundColor: COLORS.bisquePrimary }}
		>
			<MessageList
				messages={messages}
				handleLoadMore={() => {
					setPage((prev) => prev + 1);
				}}
				userId={user.id}
			/>
			<SendMessageBlock chatId={chatId} />
		</SafeAreaView>
	);
}
