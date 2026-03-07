import { COLORS } from "@shared/constants/colors";
import { FONT_SIZE } from "@shared/constants/font-size";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 0.9,
		justifyContent: "center",
		alignItems: "center",
        gap: 10
	},
	image: {
		width: 100,
		height: 100,
	},
	title: {
		fontSize: FONT_SIZE.large,
		color: COLORS.brownPrimary,
	},
});
