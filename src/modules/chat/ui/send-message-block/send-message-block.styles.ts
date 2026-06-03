import { StyleSheet } from "react-native";
import { COLORS } from "@shared/constants/colors";
import { FONT_SIZE } from "@shared/constants/font-size";

export const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		padding: 5,
		backgroundColor: COLORS.bisquePrimary,
	},
	inputContainer: {
		flex: 1,
		backgroundColor: COLORS.grey,
		padding: 5,
		borderRadius: 10,
        minHeight: 40
	},
	input: {
		fontSize: FONT_SIZE.titleLarge,
		fontWeight: 400,
		color: COLORS.black,
	},
	iconButton: {},
});
