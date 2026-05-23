import { COLORS } from "@shared/constants/colors";
import { FONT_SIZE } from "@shared/constants/font-size";
import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    chatList: {
        flex: 1,
        padding: 10
    },
    messageContainer: {
        gap: 10,
        flex: 1
    },
    noMessagesWrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    noMessagesText: {
        padding: 10,
        width: 150,
        height: 100,
        boxSizing: 'border-box',
        fontSize: 14, // Сделано как на фигме, без имени шрифта
        color: COLORS.black,
        fontWeight: 500,
        backgroundColor: COLORS.greyBackground,
        borderRadius: 10,
        textAlign: "center"
    }
})