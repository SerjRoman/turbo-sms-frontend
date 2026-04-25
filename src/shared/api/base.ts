import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { queryBaseHeaders } from "./headers";
import { apiUrl } from "./api-urls";

export const baseApi = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: apiUrl,
		prepareHeaders: queryBaseHeaders,
	}),
	endpoints(build) {
		return {};
	},
});
