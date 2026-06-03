import { COLORS } from "@shared/constants/colors";
import { FONT_SIZE } from "@shared/constants/font-size";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	wrapper: {
		padding: 5,
	},
	authorWrapper: {
		alignItems: "flex-start",
	},
	senderWrapper: {
		alignItems: "flex-end",
	},
	container: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 7,
		paddingHorizontal: 10,
		minHeight: 30,
		maxWidth: "90%",
		gap: 5,
		borderRadius: 10,
	},
	authorContainer: {
		borderBottomLeftRadius: 0,
		backgroundColor: COLORS.bisqueSecondary,
	},
	senderContainer: {
		borderBottomRightRadius: 0,
		backgroundColor: COLORS.brownPrimary,
	},
	messageContent: {},
	text: {
		flexWrap: "wrap",
		fontSize: FONT_SIZE.titleMedium,
		color: COLORS.black,
	},
	timeContainer: {
		flexDirection: "row",
		alignItems: "flex-end",
		height: "100%",
	},
	time: {
		fontSize: 7,
		fontWeight: "500",
	},
});
