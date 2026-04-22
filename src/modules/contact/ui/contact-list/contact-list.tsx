import { View, Text } from "react-native";
import { styles } from "./contact-list.styles";
import { useGetContactsQuery } from "../../api" ;
import { Contact } from "./contact";


export function ContactList() {
    const { data, isLoading, error } = useGetContactsQuery();
    return (
        <View style = {styles.contactList}>
            {isLoading || !data ? (
                <Text>Завантаження...</Text>
            ) : error ? (
                <Text>{String(error)}</Text>
            ) : (
                data.data.map((el) => (
                <Contact
                    userId={el.id}
                    name={el.localName}
                    imageName={el.avatar}
                    key={el.id}
                />
                ))
            )}
        </View>
    );
}
