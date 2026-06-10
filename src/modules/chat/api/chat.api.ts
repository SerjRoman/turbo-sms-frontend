import { baseApi } from "@shared/api/base";
import type {
	CreateChatResponse,
	CreateChatPayload,
	ChatWithParticipantInfoResponse,
} from "./types";
import { ChatWithContactInfo } from "../model";
import { ChatWithLastMessage, ClientSocket } from "@shared/api";

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
				async onCacheEntryAdded(arg, api) {
					await api.cacheDataLoaded;
					function handleChatUpdate(payload: ChatWithLastMessage) {
						api.updateCachedData((draft) => {
							const chatIndex = draft.findIndex(
								(chat) => chat.id === payload.id,
							);
							if (chatIndex === -1) return;
							const updatedChat = draft[chatIndex];
							updatedChat.lastMessage = payload.lastMessage;
							draft.splice(chatIndex, 1);
							draft.unshift(updatedChat);
						});
					}

					ClientSocket.on("chatUpdate", handleChatUpdate);
					await api.cacheEntryRemoved;
					ClientSocket.off("chatUpdate", handleChatUpdate);
				},
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
