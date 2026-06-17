import { TouchableOpacity, Text, View } from "react-native";
import { Image } from "expo-image";
import { ContactProps } from "./contact.types";
import { styles } from "./contact-item.styles";
import { apiThumbnailUrl } from "@shared/api";

export function ContactItem(props: ContactProps) {
	const { localName, avatar, onPress } = props;
	return (
		<TouchableOpacity style={styles.contactContainer} onPress={onPress}>
			<Image
				source={`${apiThumbnailUrl}${avatar}`}
				style={styles.contactAvatar}
			/>
			<View style={styles.contactNameContainer}>
				<Text style={styles.contactName}>{localName}</Text>
			</View>
		</TouchableOpacity>
	);
}
