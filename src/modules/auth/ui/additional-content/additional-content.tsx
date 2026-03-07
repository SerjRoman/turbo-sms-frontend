import { Text, View } from "react-native";
import { styles } from "./additional-content.styles";

export function AddititonalContent() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Don’t have an account? Register now</Text>
		</View>
	);
}
