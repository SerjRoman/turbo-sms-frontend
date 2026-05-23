import { StyleSheet } from "react-native"
import { COLORS } from "@shared/constants/colors";
import { FONT_SIZE } from "@shared/constants/font-size";


export const styles = StyleSheet.create({
    contactContainer: {
        width: "100%",
        padding: 5,
        gap: 5,
        borderBottomWidth: 1,
        borderStyle: "solid",
        flexDirection: "row",
        borderColor: COLORS.grey,
        alignItems: "center"
    },
    contactAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    contactNameContainer: {
        flex: 1,
    },
    contactName: {
        fontSize: FONT_SIZE.titleLarge,
        color: COLORS.black
    }
})