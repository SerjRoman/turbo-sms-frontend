export type Chat = {
	id: number;
	createdAt: Date;
	updatedAt: Date;
	lastMessageId: number | null;
};

export interface LastMessage {
	id: number;
	chatId: number;
	type: string;
	text: string | null;
	mediaUrl: string | null;
	senderId: number;
	chatAsLastMessageId: number;
	createdAt: Date;
	updatedAt: Date;
}
export interface ChatUserInfo {
	name: string;
	id: number;
	surname: string;
	avatar: string | null;
}

export type ChatWithContactInfo = Chat & {
	lastMessage: LastMessage | null;
} & (
		| ({
				participant: ChatUserInfo & {
					contactsOf: {
						id: number;
						avatar: string | null;
						localName: string;
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
