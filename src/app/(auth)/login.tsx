import { AddititonalContent, LoginForm, WelcomeBlock } from "@modules/auth";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="auto" />
			<WelcomeBlock />
			<LoginForm />
			<AddititonalContent />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
});
