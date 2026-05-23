import { FlatList } from "react-native";
import { styles } from "./contact-list.styles";
import { Contact } from "../../model";
import { ContactItem } from "./contact-item";

interface ContactListProps {
	contacts: Contact[];
	onContactPress?: (contact: Contact) => void;
}

export function ContactList({ contacts, onContactPress }: ContactListProps) {
	return (
		<FlatList
			data={contacts}
			contentContainerStyle={styles.list}
			keyExtractor={(item) => item.id.toString()}
			renderItem={({ item }) => (
				<ContactItem
					id={item.id}
					localName={item.localName}
					avatar={item.avatar}
					onPress={() => onContactPress?.(item)}
				/>
			)}
		/>
	);
}
