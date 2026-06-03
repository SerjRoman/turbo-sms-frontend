import { HeaderChat } from "@modules/chat";
import { Stack } from "expo-router";

export default function ChatLayout() {
	return (
		<Stack>
			<Stack.Screen
				name={"[chatId]"}
				options={{
					header: () => <HeaderChat />,
				}}
			/>
		</Stack>
	);
}
