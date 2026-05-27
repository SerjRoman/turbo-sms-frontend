import { baseApi } from "@shared/api/base";
import { GetAllMessagePayload, GetAllMessagesResponse } from "./types";

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
				merge(currentCacheData, responseData) {
					currentCacheData.data.push(...responseData.data);
				},
				serializeQueryArgs({ queryArgs }) {
					return queryArgs.chatId;
				},
				forceRefetch({ currentArg, previousArg }) {
					return currentArg !== previousArg;
				},
			}),
		};
	},
});

export const {} = messageApi;
