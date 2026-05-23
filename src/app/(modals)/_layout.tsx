import { HeaderBack } from "@shared/ui/header";
import { Stack } from "expo-router";

export default function ModalLayout() {
	return (
		<Stack>
			<Stack.Screen
				options={{ header: () => <HeaderBack title="Find User" /> }}
				name="create-contact/step-one"
			/>
			<Stack.Screen
				options={{
					header: () => <HeaderBack title="Create Contact" />,
				}}
				name="create-contact/step-two"
			/>
			<Stack.Screen
				options={{ header: () => <HeaderBack title="Create Chat" /> }}
				name="create-chat"
			/>
		</Stack>
	);
}
