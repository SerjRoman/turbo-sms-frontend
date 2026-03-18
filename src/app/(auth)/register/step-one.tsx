import { WelcomeBlock, AddititonalContent, RegisterForm } from "@modules/auth";
import { StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { SafeAreaView } from "react-native-safe-area-context";

export default function StepOne() {
	return (
		<SafeAreaView style={styles.container}>
			<KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
				<WelcomeBlock />
				<RegisterForm.StepOne />
				<AddititonalContent
					text={"Already have an account? "}
					href={"/login"}
					linkText={"Login now!"}
				/>
			</KeyboardAwareScrollView>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
});
