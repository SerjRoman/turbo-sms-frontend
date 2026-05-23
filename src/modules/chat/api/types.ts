import { Chat } from "../model";

export interface CreateChatPayload {
	contactUserId: number;
}
export type CreateChatResponse = Chat;

export type ChatWithParticipantInfoResponse = Chat & {
	lastMessage: {
		id: number;
		createdAt: Date;
		updatedAt: Date;
		chatId: number;
		type: string;
		text: string | null;
		mediaUrl: string | null;
		chatAsLastMessageId: number;
		senderId: number;
	} | null;
	participants: [
		{
			user: {
				name: string;
				id: number;
				surname: string;
				contactsOf: [
					{
						id: number;
						avatar: string | null;
						localName: string;
					},
				];
				avatar: string | null;
			};
		} & {
			id: number;
			createdAt: Date;
			updatedAt: Date;
			userId: number;
			chatId: number;
		},
	];
};
