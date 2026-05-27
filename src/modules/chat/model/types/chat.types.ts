export type Chat = {
	id: number;
	createdAt: string;
	updatedAt: string;
	lastMessageId: number | null;
};

export interface Message {
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
export interface ChatUserInfo {
	name: string;
	id: number;
	surname: string;
	avatar: string | null;
}

export type ChatWithContactInfo = Chat & {
	lastMessage: Message | null;
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
