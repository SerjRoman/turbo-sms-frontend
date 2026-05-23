import { styles } from "./message-obj.styles"
import type { MessageObjProps } from "./message-obj.types"
import { View, Text } from "react-native"
import { Icons } from "@shared/ui/icons"
import { Image } from "expo-image"
import { apiMediaUrl, apiThumbnailUrl } from "@shared/api"


export function MessageObj(props: MessageObjProps){
    const { text, senderId, clientId, mediaUrl, type, sentAt } = props
    const isMyMessage = senderId === clientId
    return (
        <View style = {[styles.messageWrapper, isMyMessage ? styles.messageWrapperEnd : styles.messageWrapperStart]}>
            {type === "text" ?
                <View style = {[styles.messageBlock, isMyMessage ? styles.messageMain : styles.messageSecondary]}>
                    <Text style = {styles.messageText}>{text}</Text>
                    <View style = {styles.messageData}>
                        <Text style = {styles.messageSentAt}>{sentAt}</Text>
                        {isMyMessage && <View style  = {styles.messageCheckmarks}>
                            <Icons.CheckmarkIcon/>
                            <Icons.CheckmarkIcon style = {{marginLeft: -8}}/>
                        </View>}
                    </View>
                </View>
            : <Image 
                source = {apiMediaUrl + mediaUrl} 
                placeholder = {apiThumbnailUrl + mediaUrl}
                style = {[styles.messageImage, isMyMessage ? styles.imageMain : styles.imageSecondary]}
                />}
        </View>
    )
}