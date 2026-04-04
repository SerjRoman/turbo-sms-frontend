import {
	BaseQueryFn,
	createApi,
	FetchArgs,
	fetchBaseQuery,
	FetchBaseQueryError,
	FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query/react";

interface Post {
	id: number;
	userId: number;
	body: string;
	title: string;
}

const pause = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const baseQueryWithDelay: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError,
	{},
	FetchBaseQueryMeta
> = async (arg, api, extra) => {
	await pause(2000);
	return fetchBaseQuery({ baseUrl: "http://localhost:3000" })(
		arg,
		api,
		extra,
	);
};

export const baseApi = createApi({
	reducerPath: "api",
	baseQuery: baseQueryWithDelay,
	/**
	 * tagTypes: ["Posts"]
	 * ------------------
	 * Здесь мы объявляем все типы тегов, которые будем использовать в нашем API.
	 * Это как бы "регистрация" возможных тегов. В данном случае, мы регистрируем
	 * один тип тега — "Posts". Это позволяет RTK Query знать о его существовании
	 * и отслеживать, какие запросы с ним связаны.
	 * Вы можете объявить несколько типов тегов, например: ["Posts", "Users", "Comments"].
	 */
	tagTypes: ["Posts"],
	endpoints(build) {
		return {
			getPosts: build.query<Post[], void>({
				query() {
					return {
						url: "posts",
						method: "GET",
					};
				},
				/**
				 * providesTags: ["Posts"]
				 * -----------------------
				 * Эта опция "привязывает" данные, полученные этим запросом, к тегу "Posts".
				 * Когда `getPosts` успешно выполняется, RTK Query помечает полученный
				 * список постов тегом "Posts". Теперь RTK Query знает, что кэш этого
				 * запроса ассоциирован с этим тегом. Если какой-либо другой запрос
				 * сделает этот тег недействительным, `getPosts` будет автоматически
				 * выполнен повторно для обновления данных.
				 */
				providesTags: ["Posts"],
			}),
			addPost: build.mutation<Post, Omit<Post, "id">>({
				query(arg) {
					return {
						url: "posts",
						method: "POST",
						body: arg,
					};
				},
				/**
				 * invalidatesTags: ["Posts"]
				 * ---------------------------
				 * Эта опция объявляет, какие теги становятся недействительными ("инвалидируются")
				 * после успешного выполнения этой мутации.
				 * Когда `addPost` успешно завершается (т.е., новый пост добавлен на сервере),
				 * RTK Query видит, что тег "Posts" стал недействительным.
				 *
				 * После этого RTK Query автоматически найдет все активные "query" эндпоинты,
				 * которые предоставляют (`providesTags`) тег "Posts" (в нашем случае это `getPosts`),
				 * и выполнит их повторно, чтобы получить свежие данные с сервера.
				 *
				 * В результате, любой компонент, использующий хук `useGetPostsQuery`,
				 * автоматически получит обновленный список постов, включающий только что добавленный пост.
				 */
				invalidatesTags: ["Posts"],
			}),
			getPost: build.query<Post, { id: number }>({
				query(arg) {
					return {
						url: `posts/${arg.id}`,
					};
				},
				providesTags: ["Posts"],
			}),
		};
	},
});

export const { useGetPostsQuery, useAddPostMutation, useGetPostQuery } =
	baseApi;
