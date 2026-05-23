import { ContactList, useGetContactsQuery } from "@modules/contact";
import { View } from "react-native";

export default function Contacts() {
	const { data } = useGetContactsQuery();
	return (
		<View style={{ flex: 1 }}>
			<ContactList contacts={data || []} />
		</View>
	);
}
