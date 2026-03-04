import { StyleSheet } from "react-native";
import { COLORS } from "@shared/constants/colors";
import { FONT_SIZE } from "@shared/constants/font-size";

export const styles = StyleSheet.create({
	button: {
		width: 200,
		height: 50,
		backgroundColor: COLORS.bisqueSecondary,
		borderRadius: 16,
		alignItems: "center",
		justifyContent: "center"
	},
	text: {
		fontSize: FONT_SIZE.titleMedium,
		color: "#000",
		textAlign: "center",
		fontWeight: 500
	},
	disabled: {
		opacity: 0.5,
		backgroundColor: "transparent",
		borderColor: COLORS.bisqueSecondary,
		borderWidth: 2,
		borderStyle: "solid"
	},
	disabledText: {
		color: COLORS.transparentBlack
	},
});
