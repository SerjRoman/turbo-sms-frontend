import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/colors";
import { FONT_SIZE } from "../../../constants/font-size";



export const styles = StyleSheet.create({
	button: {
		flexDirection: "row",
		alignItems: "center",
	},
	text: {
		fontSize: FONT_SIZE.titleLarge,
		color: COLORS.brownPrimary,
	},
});