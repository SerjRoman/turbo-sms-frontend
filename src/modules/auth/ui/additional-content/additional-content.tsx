import { Text, View } from "react-native";
import { styles } from "./additional-content.styles";
import { Href, Link } from "expo-router";
interface AddititonalContentProps {
	text: string;
	href: Href;
	linkText: string;
}

export function AddititonalContent({
	text,
	href,
	linkText,
}: AddititonalContentProps) {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{text}</Text>
			<Link href={href} replace>
				<Text style={styles.linkText}>{linkText}</Text>
			</Link>
		</View>
	);
}
