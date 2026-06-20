import { Text, View } from "react-native";
import { styles } from "./welcome-block.styles";
import { Images } from "@shared/ui/images";

export function WelcomeBlock() {
	return (
		<View style={styles.container}>
			<Images.LogoImage style={styles.image} />
			<Text style={styles.title}>Welcome to TurboSMS</Text>
		</View>
	);
}
