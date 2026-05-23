import { useUserContext } from "@modules/auth"
import { styles } from "./message-list.styles"
import { MessageListProps } from "./message-list.types"
import { FlatList, View, Text } from "react-native"
import { MessageObj } from "./message-obj"


export function MessageList(props: MessageListProps){
    const { messages } = props
    const { user } = useUserContext()
    const len = messages.length > 0
    if (len){
        return <FlatList 
            contentContainerStyle={styles.messageContainer}
            data={messages}
            renderItem={({ item }) => <MessageObj senderId={item.senderId} clientId={user?.id ? user?.id : -1} text = {item.text} type = {item.type} mediaUrl = {item.mediaUrl} sentAt = {item.createdAt} />}
            keyExtractor={(item) => `${item.id}`}
            style={styles.chatList}
            inverted
        />
    }
    return (
        <View style = {styles.noMessagesWrapper}>
            <Text style = {styles.noMessagesText}>
                Start chat by sending first message!
            </Text>
        </View>
    )
}