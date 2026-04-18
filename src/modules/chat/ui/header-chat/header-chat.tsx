import { Header } from "@shared/ui/header";
import { Image } from "expo-image";
import { styles } from "./header-chat.styles";
import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { Icons } from "@shared/ui/icons";
import { COLORS } from "@shared/constants/colors";

export function HeaderChat() {
	const title = "";
	const isOnline = true;
	return (
		<Header
			bottom={
				<View style={styles.container}>
					<TouchableOpacity
						onPress={() => {
							if (router.canGoBack()) router.back();
						}}
						style={styles.button}
					>
						<Icons.ArrowBackIcon fill={COLORS.brownPrimary} />
						<Text style={styles.text}>Back</Text>
					</TouchableOpacity>
					<View style={styles.titleContainer}>
						<Text style={styles.nameChat}>{title}</Text>
						<View style={styles.lowerMiddlePart}>
							{isOnline && <View style={styles.indicator} />}
							<Text style={styles.onlineStatusText}>
								{isOnline ? "Online" : "Offline"}
							</Text>
						</View>
					</View>
					<Image
						source={require("@assets/default-user.png")}
						style={styles.avatar}
					/>
				</View>
			}
		/>
	);
}
