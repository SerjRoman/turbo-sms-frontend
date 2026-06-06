import { useUserContext } from "@modules/auth";
import { ChatList, useGetAllChatsQuery } from "@modules/chat";
import { ClientSocket } from "@shared/api";
import { useEffect, useState } from "react";
import { View } from "react-native";

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

export default function Chats() {
	const { data: chats } = useGetAllChatsQuery(undefined, {
		pollingInterval: 5000,
	});
	const { user } = useUserContext();
	const [onlineUserIds, setOnlineUserIds] = useState<Set<number>>(
		new Set<number>(),
	);
	useEffect(() => {
		if (!chats || chats.length === 0) return;
		const userIds = chats.map((chat) => chat.participant.id);
		subscribeAndGetInitialStatuses(userIds, ({ statuses }) => {
			const onlineIds = new Set<number>();
			for (const status of statuses) {
				if (status.status === "online") {
					onlineIds.add(status.userId);
				}
			}
			setOnlineUserIds(onlineIds);
		});
		const handleStatusUpdate = (payload: {
			userId: number;
			status: string;
		}) => {
			setOnlineUserIds((prev) => {
				const onlineUserIds = new Set(prev);
				if (payload.status === "online") {
					onlineUserIds.add(payload.userId);
				} else {
					onlineUserIds.delete(payload.userId);
				}
				return onlineUserIds;
			});
		};
		subscribeToUserStatusUpdates(handleStatusUpdate);
		return () => {
			unsubscribeFromUserStatusUpdates(handleStatusUpdate);
		};
	}, [chats]);

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
