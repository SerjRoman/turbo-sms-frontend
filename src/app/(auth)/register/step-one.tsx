import { WelcomeBlock, AddititonalContent, RegisterForm } from "@modules/auth";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function StepOne() {
	return (
		<SafeAreaView style={styles.container}>
			<WelcomeBlock />
			<RegisterForm.StepOne />
			<AddititonalContent
				text={"Already have an account? "}
				href={"/login"}
				linkText={"Login now!"}
			/>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
});
