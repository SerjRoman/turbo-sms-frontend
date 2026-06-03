import type { PaginatedResponse, PaginationParams } from "@shared/types";
import type { Message, Chat } from "../model";

export interface CreateChatPayload {
	contactUserId: number;
}
export type CreateChatResponse = Chat;

export type ChatWithParticipantInfoResponse = Chat & {
	lastMessage: Message | null;
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
			createdAt: string;
			updatedAt: string;
			userId: number;
			chatId: number;
		},
	];
};

export type GetAllMessagesResponse = PaginatedResponse<Message>;
export type GetAllMessagePayload = PaginationParams & {
	chatId: number;
};

export type UploadMessageMediaPayload = {
	media: string;
};

export type UploadMessageMediaResponse = {
	media: string;
};
