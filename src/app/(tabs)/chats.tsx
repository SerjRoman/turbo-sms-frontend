import { useUserContext } from "@modules/auth";
import { ChatList, useGetAllChatsQuery } from "@modules/chat";
import { ClientSocket } from "@shared/api";
import { useEffect, useState } from "react";
import { View } from "react-native";

function getOnlineUsers(
	userIds: number[],
	response: ({ userIds }: { userIds: number[] }) => void,
) {
	ClientSocket.emit("getOnlineUsers", { userIds }, response);
}

export default function Chats() {
	const { data: chats, isFetching } = useGetAllChatsQuery(undefined, {
		pollingInterval: 5000,
	});
	const { user } = useUserContext();
	const [onlineUserIds, setOnlineUserIds] = useState<Set<number>>(
		new Set<number>(),
	);
	useEffect(() => {
		if (isFetching || !chats || chats.length === 0) return;
		const userIds = chats.map((chat) => chat.participant.id);
		getOnlineUsers(userIds, (response) => {
			setOnlineUserIds(new Set(response.userIds));
		});
	}, [chats, isFetching]);

	function isMyMessage(senderId: number) {
		return user?.id === senderId;
	}
	return (
		<View style={{ flex: 1 }}>
			<ChatList
				chats={chats || []}
				onlineUserIds={onlineUserIds}
				isMyMessage={isMyMessage}
			/>
		</View>
	);
}
