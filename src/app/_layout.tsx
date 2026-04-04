import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { baseApi } from "@shared/api/base";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
	return (
		<SafeAreaProvider>
			<ApiProvider api={baseApi}>
				<KeyboardProvider>
					<StatusBar style="auto" />
					<Stack screenOptions={{ headerShown: false }}>
						{/* Compound Component */}
						<Stack.Screen name="index" />
						<Stack.Screen name={"(auth)"} />
					</Stack>
				</KeyboardProvider>
			</ApiProvider>
		</SafeAreaProvider>
	);
}
