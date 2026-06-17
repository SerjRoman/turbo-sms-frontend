import {
	AndroidImportance,
	requestPermissionsAsync,
	setNotificationChannelAsync,
} from "expo-notifications";
import { Platform } from "react-native";

export async function requestNotificationPermission() {
	const response = await requestPermissionsAsync();
	if (!response.granted) return false;
	if (Platform.OS === "android") {
		await setNotificationChannelAsync("default", {
			name: "default",
			importance: AndroidImportance.MAX,
		});
	}
}
