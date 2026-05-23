export interface Contact {
	id: number;
	localName: string;
	avatar: string | null;
	createdAt: Date;
	updatedAt: Date;
	contactUserId: number;
	contactOwnerId: number;
}
