import { baseApi } from "@shared/api/base";
import type {
	RegResponse,
	RegPayload,
	LoginResponce,
	LoginPayload,
	MeResponse,
} from "./api.types";

/*

1. Endpoints:
    - POST /users/login         credentials -> {"token": "dafmpsdfjifjis"}
    - POST /users/register      credentials -> {"token": "dafmpsdfjifjis"}
    - GET  /users/me            {headers: "Bearer TOKEN"} -> UserData

2. 
    LoginScreen.        -> token
    RegisterScreen      -> token
    
    если есть token -> send request to /me

        1. Токен пришел из Логин/Регистрация
        2. Локальное хранилище
    
    только если me {status: 200}-> HomeScreen
*/
// enhance endpoints goes to compendium lets gooo
const authApi = baseApi
	.enhanceEndpoints({ addTagTypes: ["User"] })
	.injectEndpoints({
		endpoints: (builder) => {
			return {
				login: builder.mutation<LoginResponce, LoginPayload>({
					query: (body) => ({
						url: "users/login",
						method: "POST",
						body,
					}),
				}),
				register: builder.mutation<RegResponse, RegPayload>({
					query(reqBody) {
						const newFormData = new FormData();
						newFormData.append("email", reqBody.email);
						newFormData.append("name", reqBody.name);
						newFormData.append("surname", reqBody.surname);
						newFormData.append("password", reqBody.password);
						newFormData.append("username", reqBody.username);
						newFormData.append("avatar", {
							uri: reqBody.avatar,
							type: "images/jpeg",
							name: `${Date.now()}.jpeg`,
						} as any);
						return {
							url: "users/register",
							method: "POST",
							body: newFormData,
						};
					},
				}),
				me: builder.query<MeResponse, void>({
					query: () => ({ url: "users/me" }),
				}),
			};
		},
	});
export const { useLoginMutation, useMeQuery, useRegisterMutation } = authApi;
