import type { ChatWithContactInfo } from "./chat-list.types"


export const TEST_CHAT_LIST_DATA: ChatWithContactInfo[] = [
	{
		id: 10,
		lastMessageId: 11,
		lastMessage: {
			id: 11,
			chatId: 10,
			type: "text",
			text: "Hey, are we still on?",
			mediaUrl: null,
			senderId: 2,
			chatAsLastMessageId: 10,
			createdAt: "2026-05-06T08:30:00Z",
			updatedAt: "2026-05-06T08:30:00Z"
		},
		isInContact: true,
		participant: {
			id: 2,
			name: "Bob",
			surname: "Smith",
			avatar: "https://picsum.photos/seed/bob/200",
			lastSeenAt: "2026-05-06T08:45:00Z",
			contactOf: {
				id: 12,
				avatar: "https://picsum.photos/seed/bob-contact/200",
				localName: "Bobby",
				addedAt: new Date("2026-01-01T12:00:00Z")
			}
		}
	},
	{
		id: 15,
		lastMessageId: null,
		lastMessage: null,
		isInContact: false,
		participant: {
			id: 3,
			name: "Lisa",
			surname: "Brown",
			avatar: "https://picsum.photos/seed/lisa/200",
			lastSeenAt: "2026-05-05T20:10:00Z"
		}
	},
	{
		id: 20,
		lastMessageId: 21,
		lastMessage: {
			id: 21,
			chatId: 20,
			type: "text",
			text: "Got it, thanks!",
			mediaUrl: null,
			senderId: 4,
			chatAsLastMessageId: 20,
			createdAt: "2026-05-05T18:00:00Z",
			updatedAt: "2026-05-05T18:00:00Z"
		},
		isInContact: true,
		participant: {
			id: 4,
			name: "Andrew",
			surname: "Taylor",
			avatar: "https://picsum.photos/seed/andrew/200",
			lastSeenAt: "2026-05-05T18:05:00Z",
			contactOf: {
				id: 13,
				avatar: "https://picsum.photos/seed/andrew-contact/200",
				localName: "Andy",
				addedAt: new Date("2026-02-10T09:30:00Z")
			}
		}
	},
	{
		id: 25,
		lastMessageId: 22,
		lastMessage: {
			id: 22,
			chatId: 25,
			type: "text",
			text: "See you soon!",
			mediaUrl: null,
			senderId: 5,
			chatAsLastMessageId: 25,
			createdAt: "2026-05-04T16:45:00Z",
			updatedAt: "2026-05-04T16:45:00Z"
		},
		isInContact: false,
		participant: {
			id: 5,
			name: "Emma",
			surname: "Wilson",
			avatar: "https://picsum.photos/seed/emma/200",
			lastSeenAt: "2026-05-04T17:00:00Z"
		}
	},
	{
		id: 30,
		lastMessageId: 23,
		lastMessage: {
			id: 23,
			chatId: 30,
			type: "text",
			text: "Can you send me the file?",
			mediaUrl: null,
			senderId: 6,
			chatAsLastMessageId: 30,
			createdAt: "2026-05-06T07:20:00Z",
			updatedAt: "2026-05-06T07:20:00Z"
		},
		isInContact: true,
		participant: {
			id: 6,
			name: "John",
			surname: "Davis",
			avatar: "https://picsum.photos/seed/john/200",
			lastSeenAt: "2026-05-06T07:25:00Z",
			contactOf: {
				id: 14,
				avatar: "https://picsum.photos/seed/john-contact/200",
				localName: "Johnny",
				addedAt: new Date("2025-12-20T10:00:00Z")
			}
		}
	},
	{
		id: 35,
		lastMessageId: null,
		lastMessage: null,
		isInContact: false,
		participant: {
			id: 7,
			name: "Sophia",
			surname: "Miller",
			avatar: "https://picsum.photos/seed/sophia/200",
			lastSeenAt: "2026-05-03T12:00:00Z"
		}
	}
];