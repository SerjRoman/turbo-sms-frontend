import { AddititonalContent, LoginForm, WelcomeBlock } from "@modules/auth";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

export default function Login() {
	return (
		<SafeAreaView style={styles.container}>
			<KeyboardAwareScrollView style={{ flex: 1 }} contentContainerStyle={{flex: 1}}>
				<WelcomeBlock />
				<LoginForm />
				<AddititonalContent
					text={"Don't have an account? "}
					href={"/register/step-one"}
					linkText={"Register now!"}
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
