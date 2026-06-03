import { StyleSheet } from "react-native";
import { COLORS } from "@shared/constants/colors";
import { FONT_SIZE } from "@shared/constants/font-size";

export const chatListStyles = StyleSheet.create({
	chatList: {
		width: "100%",
		height: "100%",
		paddingVertical: 5,
	},
	chatListContainer: {
		width: "100%",
	},
});

export const chatItemStyles = StyleSheet.create({
	container: {
		flexDirection: "row",
		gap: 5,
		padding: 5,
		borderBottomColor: COLORS.grey,
		borderBottomWidth: 1,
		height: 60,
	},
	avatarChatBlock: {
		width: 50,
		height: 50,
		position: "relative",
	},
	avatarChat: {
		flex: 1,
		borderRadius: 25,
	},
	onlineEllipsis: {
		width: 10,
		height: 10,
		borderRadius: 5,
		right: 2.5,
		bottom: 2.5,
		position: "absolute",
	},
	onlineBlockON: {
		backgroundColor: COLORS.green,
	},
	onlineBlockOFF: {
		backgroundColor: COLORS.red,
	},
	textualBlock: {
		flex: 1,
		gap: 5,
		alignItems: "flex-start",
	},
	nameLabel: {
		fontSize: FONT_SIZE.titleLarge,
		color: COLORS.black,
		textAlign: "center",
	},
	textLabel: {
		fontWeight: 500,
		fontSize: FONT_SIZE.titleSmall,
		color: COLORS.greyText,
		textAlign: "center",
	},
	sentAtLabel: {
		fontSize: FONT_SIZE.titleSmall,
		color: COLORS.black,
		fontWeight: 500,
	},
});
