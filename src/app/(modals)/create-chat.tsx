import { useCreateChatMutation } from "@modules/chat";
import { ContactList, useGetContactsQuery } from "@modules/contact";
import { useRouter } from "expo-router";
import { View } from "react-native";

export default function CreateChatModal() {
	const { data } = useGetContactsQuery();
	const [createChat] = useCreateChatMutation();
    const router = useRouter();
	return (
		<View style={{ flex: 1 }}>
			<ContactList
				contacts={data || []}
				onContactPress={async (contact) => {
					try {
						await createChat({
							contactUserId: contact.id,
						}).unwrap();
                        router.dismissTo("/chats")
					} catch (error) {
						console.error("Failed to create chat:", error);
					}
				}}
			/>
		</View>
	);
}
