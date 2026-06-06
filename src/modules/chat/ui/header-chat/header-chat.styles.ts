import { StyleSheet } from "react-native";
import { COLORS } from "@shared/constants/colors";
import { FONT_SIZE } from "@shared/constants/font-size";

export const styles = StyleSheet.create({
	container: {
		paddingBottom: 10,
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: COLORS.bisquePrimary,
		paddingHorizontal: 3,
	},
	fullnameContainer: {
		flex: 1,
		alignItems: "center",
	},
	button: {
		flexDirection: "row",
		alignItems: "center",
	},
	text: {
		fontSize: FONT_SIZE.titleLarge,
		color: COLORS.brownPrimary,
	},
	nameChat: {
		color: COLORS.black,
		fontSize: FONT_SIZE.headlineLarge,
		fontWeight: 400,
	},
	lowerMiddlePart: {
		alignItems: "center",
		flexDirection: "row",
	},
	indicator: {
		width: 15,
		height: 15,
		borderRadius: 7.5,
	},
	onlineStatusText: {
		fontWeight: 500,
		fontSize: FONT_SIZE.titleMedium,
		color: COLORS.black,
	},
	avatar: {
		width: 50,
		height: 50,
		borderRadius: 25,
	},
});
