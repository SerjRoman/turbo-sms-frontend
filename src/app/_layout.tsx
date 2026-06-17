import {
	useUserContext,
	useLazyMeQuery,
	UserContextProvider,
} from "@modules/auth";
import { NotificationProvider } from "@modules/notification";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { ClientSocket } from "@shared/api";
import { baseApi } from "@shared/api/base";
import { Stack, useRouter } from "expo-router";
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
						<NotificationProvider>
							<StatusBar style="auto" />
							<AppStack />
						</NotificationProvider>
					</KeyboardProvider>
				</UserContextProvider>
			</ApiProvider>
		</SafeAreaProvider>
	);
}

function AppStack() {
	const { token, setUser, setToken } = useUserContext();
	const [meQuery, { data }] = useLazyMeQuery();
	const router = useRouter();
	useEffect(() => {
		if (!token) return;
		AsyncStorage.setItem("token", token);
		meQuery()
			.unwrap()
			.catch(() => AsyncStorage.clear());

		if (!ClientSocket.connected) {
			ClientSocket.auth = { token: `Bearer ${token}` };
			ClientSocket.connect();
		}

		function onConnection() {
			console.log("Connected to socket server");
		}
		function onDisconnection() {
			console.log("Disconnected from socket server");
		}
		function onConnectionError(error: Error) {
			console.error("Connection error:", error);
		}

		ClientSocket.on("connect", onConnection);
		ClientSocket.on("disconnect", onDisconnection);
		ClientSocket.on("connect_error", onConnectionError);

		return () => {
			ClientSocket.off("connect", onConnection);
			ClientSocket.off("disconnect", onDisconnection);
			ClientSocket.off("connect_error", onConnectionError);
			ClientSocket.disconnect();
		};
	}, [token]);

	useEffect(() => {
		if (data) {
			setUser(data);
			router.replace("/chats");
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
			<Stack.Screen
				name="(modals)"
				options={{
					presentation: "containedModal",
				}}
			/>
		</Stack>
	);
}
