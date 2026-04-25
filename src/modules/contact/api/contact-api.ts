import { baseApi } from "@shared/api/base";
import type { 
    GetAllContactsResponse,
    GetUserPayload,
    GetUserResponse,
    GetContactPayload,
    GetContactResponse,
    CreateContactPayload,
    CreateContactResponse
} from "./contact.types";
 

const contactApi = baseApi
    .enhanceEndpoints({ addTagTypes: ["Contacts"] })
    .injectEndpoints({
        endpoints: (builder) => {
            return {
                getContacts: builder.query<GetAllContactsResponse, void>({
                    query: () => ({
                        url: "contacts/",
                        method: "GET"
                    })    
                }),
                getUser: builder.query<GetUserResponse, GetUserPayload>({
                    query: (body) => ({
                        url: `users/${body.username}`,
                        method: "GET"
                    })
                }),
                getContact: builder.query<GetContactResponse, GetContactPayload>({
                    query: (body) => ({
                        url: `contacts/${body.contactId}`,
                        method: "GET"
                    })
                }),
                createContact: builder.mutation<CreateContactResponse, CreateContactPayload>({
                    query(reqBody) {
						const newFormData = new FormData();
						newFormData.append("localName", `${reqBody.name} ${reqBody.surname}`);
						newFormData.append("contactUserId", String(reqBody.contactUserId));
						newFormData.append("avatar", {
							uri: reqBody.avatar,
							type: "images/jpeg",
							name: `${Date.now()}.jpeg`,
						} as any);
                        return {
                            url: "contacts",
							method: "POST",
							body: newFormData,
                        }
                    }
                })
            }}
        })
            
export const {
    useGetContactsQuery,
    useGetContactQuery,
    useGetUserQuery,
    useCreateContactMutation,
    useLazyGetUserQuery
} = contactApi