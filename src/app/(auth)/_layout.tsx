import { Stack } from "expo-router";

export default function AuthLayout() {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="login" />
			<Stack.Screen name="register/step-one" />
			<Stack.Screen name="register/step-two" />
		</Stack>
	);
}
