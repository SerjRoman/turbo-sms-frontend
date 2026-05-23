import type { User } from "../@x";
import type { Contact } from "../model";

export type GetAllContactsResponse = Contact[];

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
	avatar: string | null;
}
export type CreateContactResponse = Contact;
