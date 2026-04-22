import { TouchableOpacity, Text, View } from "react-native";
import { Image } from "expo-image";
import { ContactProps } from "./contact.types";
import { styles } from "./contact.styles";

export function Contact(props: ContactProps) {
    const { name, imageName, userId } = props;
    return (
        <TouchableOpacity style={styles.contactContainer}>
        <Image 
            source={`http://localhost:8000/media/original/${imageName}`}
            placeholder={`http://localhost:8000/media/thumbnail/${imageName}`} 
        />
        <View style={styles.contactNameContainer}>
            <Text style={styles.contactName}>{name}</Text>
        </View>
        </TouchableOpacity>
    );
}
