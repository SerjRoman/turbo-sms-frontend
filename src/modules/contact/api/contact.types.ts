import type { User } from "../@x";

interface Contact {
	id: number;
	localName: string;
	avatar: string;
	lastSeenAt: string;
}

export interface GetAllContactsResponse {
	data: Contact[];
}

export interface GetUserPayload {
	username: string;
}
export type GetUserResponse = User;

export interface GetContactPayload {
	contactId: number;
}
export type GetContactResponse = Contact;

export interface CreateContactPayload {
	name: string;
	surname: string;
	contactUserId: number;
	avatar: string;
}
export type CreateContactResponse = Contact;
