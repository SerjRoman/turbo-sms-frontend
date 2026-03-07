import { COLORS } from "@shared/constants/colors";
import { FONT_SIZE } from "@shared/constants/font-size";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	label: {
		fontSize: FONT_SIZE.titleMedium,
		color: COLORS.black,
		fontWeight: 500,
	},
	inputContainer: {
		height: 60,
		width: "100%",
		gap: 10,
		paddingHorizontal: 10,
		backgroundColor: COLORS.bisquePrimary,
		flexDirection: "row",
		borderRadius: 16,
		alignItems: "center",
	},
	errorContainer: {
		flexDirection: "row",
		gap: 2,
		alignItems: "center",
	},
	input: {
		color: COLORS.black,
		flex: 1,
		fontSize: FONT_SIZE.titleMedium,
	},
	errorText: {
		color: COLORS.error,
	},
	passwordButton: {
		width: 32,
		height: 32,
		justifyContent: "center",
		alignItems: "center",
	},
});
