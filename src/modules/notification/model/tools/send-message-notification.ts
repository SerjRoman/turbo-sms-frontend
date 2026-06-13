import { scheduleNotificationAsync } from "expo-notifications";

export async function sendMessageNotification(name: string, text: string) {
	await scheduleNotificationAsync({
		content: {
			title: `New message from: ${name}`,
			body: text,
		},
		trigger: null,
	});
}
