import { StyleSheet } from "react-native";
import { COLORS } from "@shared/constants/colors";
import { FONT_SIZE } from "@shared/constants/font-size";


export const styles = StyleSheet.create({
    messageWrapper: {
        width: "100%",
        padding: 2
    },
    messageWrapperEnd: {
        alignItems: "flex-end"
    },
    messageWrapperStart: {
        alignItems: "flex-start"
    },
    messageBlock: {
        paddingVertical: 7,
        paddingHorizontal: 10,
        borderRadius: 10,
        minHeight: 30,
        flexDirection: "row",
        maxWidth: 350,
        alignContent: "center"
    },
    messageMain: {
        backgroundColor: COLORS.brownSecondary,
        borderBottomRightRadius: 0
    },
    messageSecondary: {
        backgroundColor: COLORS.bisqueSecondary,
        borderBottomLeftRadius: 0
    },
    messageText: {
        fontSize: FONT_SIZE.bodyLarge,
        color: COLORS.black,
        fontWeight: 500
    },
    messageData: {
        height: "100%",
        flexDirection: "row",
        alignItems: "flex-end"
    },
    messageSentAt: {
        fontSize: 7, // Так задано на фигме
        color: COLORS.black,
        fontWeight: 500
    },
    messageCheckmarks: {
        position: "relative"
    },
    messageImage: {
        borderRadius: 16,
        width: 300,
        height: 350,
        borderWidth: 3,
        borderStyle: "solid"
    },
    imageMain: {
        borderColor: COLORS.brownSecondary,
        borderBottomRightRadius: 0
    },
    imageSecondary: {
        borderColor: COLORS.bisqueSecondary,
        borderBottomLeftRadius: 0
    }
})