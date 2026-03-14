import { COLORS } from "@shared/constants/colors";
import { FONT_SIZE } from "@shared/constants/font-size";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
	},
	text: {
		fontSize: FONT_SIZE.titleMedium,
	},
	linkText: {
		fontSize: FONT_SIZE.titleMedium,
		color: COLORS.brownPrimary,
	},
});
