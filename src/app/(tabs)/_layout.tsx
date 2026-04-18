import { HeaderChats } from "@modules/chat";
import { HeaderContacts } from "@modules/contact";
import { HeaderProfile } from "@modules/profile";
import { HeaderSettings } from "@modules/settings";
import { COLORS } from "@shared/constants/colors";
import { FONT_SIZE } from "@shared/constants/font-size";
import { Icons } from "@shared/ui/icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarLabelStyle: {
					fontSize: FONT_SIZE.small,
					color: COLORS.black,
				},
				tabBarStyle: {
					backgroundColor: COLORS.bisqueSecondary,
				},
			}}
		>
			<Tabs.Screen
				options={{
					tabBarLabel: "Contacts",
					tabBarIcon: ({ focused }) => (
						<Icons.ContactsIcon
							fill={focused ? COLORS.grey : COLORS.black}
						/>
					),
					header: () => <HeaderContacts />,
				}}
				name="contacts"
			/>
			<Tabs.Screen
				options={{
					tabBarLabel: "Chats",
					tabBarIcon: ({ focused }) => (
						<Icons.ChatsIcon
							fill={focused ? COLORS.grey : COLORS.black}
						/>
					),
					header: () => <HeaderChats />,
				}}
				name="chats"
			/>
			<Tabs.Screen
				options={{
					tabBarLabel: "Profile",
					tabBarIcon: ({ focused }) => (
						<Icons.ProfileIcon
							fill={focused ? COLORS.grey : COLORS.black}
						/>
					),
					header: () => <HeaderProfile />,
				}}
				name="profile"
			/>
			<Tabs.Screen
				options={{
					tabBarLabel: "Settings",
					tabBarIcon: ({ focused }) => (
						<Icons.SettingsIcon
							fill={focused ? COLORS.grey : COLORS.black}
						/>
					),
					header: () => <HeaderSettings />,
				}}
				name="settings"
			/>
		</Tabs>
	);
}
