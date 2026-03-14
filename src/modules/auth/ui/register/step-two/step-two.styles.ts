import { FONT_SIZE } from "@shared/constants/font-size";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 2,
		alignItems: "center",
		gap: 30,
	},
	inputs: {
		width: "100%",
		paddingHorizontal: 20,
		paddingVertical: 10,
		gap: 10,
	},
	submitBlock: {},
	selectAvatarBlock: {
		alignItems: "center",
		justifyContent: "center",
	},
	selectAvatarButton: {
		width: 75,
		height: 75,
        position: "relative"
	},
	avatar: {
		width: "100%",
		height: "100%",
		borderRadius: 32.5
	},
	searchIcon: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: [{ translateX: "-50%" }, { translateY: "-50%" }],
	},
    // top,left - ЕСЛИ указаны %, то берут размеры от родителя и делают отступы 
    // width,height = 80
    // 40,40
	selectAvatarText: {
		fontSize: FONT_SIZE.titleMedium,
		fontWeight: 500,
	},
});
