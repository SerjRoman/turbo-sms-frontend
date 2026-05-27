import { baseApi } from "@shared/api/base";
import type {
	CreateChatResponse,
	CreateChatPayload,
	ChatWithParticipantInfoResponse,
} from "./types";
import { ChatWithContactInfo } from "../model";

const chatApi = baseApi
	.enhanceEndpoints({
		addTagTypes: ["Chat"],
	})
	.injectEndpoints({
		endpoints: (build) => ({
			createChat: build.mutation<CreateChatResponse, CreateChatPayload>({
				query: (payload) => ({
					url: "/chats",
					method: "POST",
					body: payload,
				}),
				invalidatesTags: ["Chat"],
			}),
			getAllChats: build.query<ChatWithContactInfo[], void>({
				query: () => ({
					url: "/chats/my",
					method: "GET",
				}),
				providesTags: ["Chat"],
				transformResponse(
					baseQueryReturnValue: ChatWithParticipantInfoResponse[],
				) {
					return baseQueryReturnValue.map((chat) => {
						const { participants, ...restChat } = chat;
						const { contactsOf, ...restUser } =
							participants[0].user;
						if (contactsOf.length > 0) {
							return {
								...restChat,
								isInContact: true,
								participant: {
									...restUser,
									contactsOf: contactsOf[0],
								},
							};
						} else {
							return {
								...restChat,
								isInContact: false,
								participant: restUser,
							};
						}
					});
				},
			}),
		}),
	});

export const { useCreateChatMutation, useGetAllChatsQuery } = chatApi;
