import { useUserContext, useMeQuery, UserContextProvider } from "@modules/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { baseApi } from "@shared/api/base";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
	return (
		<SafeAreaProvider>
			<ApiProvider api={baseApi}>
				<UserContextProvider>
					<KeyboardProvider>
						<StatusBar style="auto" />
						<AppStack />
					</KeyboardProvider>
				</UserContextProvider>
			</ApiProvider>
		</SafeAreaProvider>
	);
}

function AppStack() {
	const { token, setUser, setToken } = useUserContext();
	const { refetch, data } = useMeQuery();

	useEffect(() => {
		if (token) {
			AsyncStorage.setItem("token", token);
			refetch();
		}
	}, [token]);

	useEffect(() => {
		if (data) {
			console.log(data);
			setUser(data);
		}
	}, [data]);

	useEffect(() => {
		async function loadToken() {
			const token = await AsyncStorage.getItem("token");
			if (token) {
				setToken(token);
			}
		}
		loadToken();
	}, []);
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="index" />
			<Stack.Screen name={"(auth)"} />
		</Stack>
	);
}
