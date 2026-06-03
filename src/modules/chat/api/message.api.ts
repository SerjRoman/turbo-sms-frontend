import { baseApi } from "@shared/api/base";
import {
	GetAllMessagePayload,
	GetAllMessagesResponse,
	UploadMessageMediaPayload,
	UploadMessageMediaResponse,
} from "./types";
import { ClientSocket } from "@shared/api";
import { Message } from "../model";

const messageApi = baseApi.injectEndpoints({
	endpoints(build) {
		return {
			getMessagesByChat: build.query<
				GetAllMessagesResponse,
				GetAllMessagePayload
			>({
				query: ({ chatId, page, take }) => ({
					url: `/messages/chat/${chatId}`,
					method: "GET",
					params: {
						page,
						take,
					},
				}),
				async onCacheEntryAdded(arg, api) {
					await api.cacheDataLoaded;
					function handleNewChatMessage(message: Message) {
						if (arg.chatId === message.chatId) {
							api.updateCachedData((draft) => {
								draft.data.unshift(message);
							});
						}
					}
					ClientSocket.on("newChatMessage", handleNewChatMessage);

					await api.cacheEntryRemoved;
					ClientSocket.off("newChatMessage", handleNewChatMessage);
				},
				merge(currentCacheData, responseData) {
					currentCacheData.data.push(...responseData.data);
				},
				serializeQueryArgs({ queryArgs }) {
					return queryArgs.chatId;
				},
				forceRefetch({ currentArg, previousArg }) {
					return currentArg !== previousArg;
				},
				keepUnusedDataFor: 0,
			}),
			uploadMessageMedia: build.mutation<
				UploadMessageMediaResponse,
				UploadMessageMediaPayload
			>({
				query: (body) => {
					const form = new FormData();
					form.append("media", {
						uri: body.media,
						name: `${Date.now()}.jpg`,
						type: "image/jpeg",
					} as any);

					return {
						url: "/messages/media",
						body: form,
						method: "POST",
					};
				},
			}),
		};
	},
});

export const { useGetMessagesByChatQuery, useUploadMessageMediaMutation } =
	messageApi;
