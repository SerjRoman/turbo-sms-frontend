import type { User } from "../model";

export interface RegPayload {
	email: string;
	password: string;
	name: string;
	surname: string;
	username: string;
    avatar: string;
}

export interface RegResponse {
	token: string;
}

export interface LoginPayload {
	email: string;
	password: string;
}

export interface LoginResponce {
	token: string;
}

export type MeResponse = User;
