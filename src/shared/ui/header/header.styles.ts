import { COLORS } from "../../constants/colors";
import { FONT_SIZE } from "../../constants/font-size";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		paddingBottom: 10,
		gap: 10,
		backgroundColor: COLORS.bisquePrimary,
		borderBottomWidth: 1,
		borderColor: COLORS.brownPrimary,
		borderStyle: "solid",
		paddingHorizontal: 3,
	},
	titleContainer: {
		flex: 1,
		textAlign: "center",
		fontSize: FONT_SIZE.headlineMedium,
		fontWeight: 400,
		color: COLORS.black,
	},
	topHeaderContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
});
