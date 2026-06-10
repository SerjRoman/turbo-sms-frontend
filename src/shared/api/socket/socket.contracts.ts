export type JoinChatCallback = (
	response: { status: "ok" } | { status: "error"; message?: string },
) => void;
export interface SendMessagePayload {
	text?: string;
	media?: string;
	chatId: number;
	type: "text" | "media";
}
export type UserStatus = { userId: number; status: string };
type Message = {
	id: number;
	createdAt: string;
	updatedAt: string;
	chatId: number;
	type: "text" | "media";
	text: string | null;
	media: string | null;
	lastChatId: number;
	senderId: number;
	chatAsLastMessageId: number;
};

export type ChatWithLastMessage = {
	lastMessage: Message;
} & {
	id: number;
	createdAt: Date;
	updatedAt: Date;
	lastMessageId: number | null;
};

export interface JoinChatPayload {
	chatId: number;
}

export interface LeaveChatPayload {
	chatId: number;
}
export type GetOnlineUsersPayload = {
	userIds: number[];
};
export type GetOnlineUsersAcknowledgment = (response: {
	userIds: number[];
}) => void;
export interface GetUserStatusPayload {
	userId: number;
}
export type SubscribeAndGetInitialStatusesPayload = {
	userIds: number[];
};
export interface ServerEvents {
	newChatMessage: (message: Message) => void;
	userStatusUpdated: (payload: UserStatus) => void;
	chatUpdate: (payload: ChatWithLastMessage) => void;
}
export interface ClientEvents {
	joinChat: (payload: JoinChatPayload, ack?: JoinChatCallback) => void;
	leaveChat: (payload: LeaveChatPayload) => void;
	sendMessage: (payload: SendMessagePayload) => void;
	getOnlineUsers: (
		payload: GetOnlineUsersPayload,
		ack?: GetOnlineUsersAcknowledgment,
	) => void;
	subscribeAndGetInitialStatuses: (
		payload: SubscribeAndGetInitialStatusesPayload,
		ack?: ({ statuses }: { statuses: UserStatus[] }) => void,
	) => void;
	getUserStatus: (
		payload: GetUserStatusPayload,
		ack?: ({ status }: { status: UserStatus }) => void,
	) => void;
}
