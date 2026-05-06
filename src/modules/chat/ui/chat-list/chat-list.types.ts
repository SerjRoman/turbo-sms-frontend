export interface LastMessage {
	id: number;
	chatId: number;
	type: string;
	text: string | null;
	mediaUrl: string | null;
	senderId: number;
	chatAsLastMessageId: number;
	createdAt: string;
	updatedAt: string;
}
export interface Chat {
	id: number;
	lastMessageId: number | null;
}
export interface ChatUserInfo {
	name: string;
	id: number;
	surname: string;
	avatar: string;
	lastSeenAt: string;
}

export type ChatWithContactInfo = Chat & {
	lastMessage: LastMessage | null;
} & (
		| ({
				participant: ChatUserInfo & {
					contactOf: {
						id: number;
						avatar: string;
						localName: string;
						addedAt: Date;
					};
				};
		  } & {
				isInContact: true;
		  })
		| ({
				participant: ChatUserInfo;
		  } & {
				isInContact: false;
		  })
	);
