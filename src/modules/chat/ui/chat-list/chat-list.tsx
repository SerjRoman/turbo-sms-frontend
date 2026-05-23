import { FlatList, View, Text } from "react-native";
import { Image } from "expo-image";
import { chatItemStyles, chatListStyles } from "./chat-list.styles";
import { TEST_CHAT_LIST_DATA } from "./TEST_DATA";
import { ChatWithContactInfo } from '../../model';

export interface ChatItemProps {
	data: ChatWithContactInfo;
}

function ChatItem(props: ChatItemProps) {
	const isOnline = false;
	const { data } = props;
	return (
		<View style={chatItemStyles.wholeChatBlock}>
			<View style={chatItemStyles.avatarChatBlock}>
				<Image
					source={data.participant.avatar}
					style={chatItemStyles.avatarChat}
				/>
				<View
					style={[
						chatItemStyles.onlineEllipsis,
						isOnline
							? chatItemStyles.onlineBlockON
							: chatItemStyles.onlineBlockOFF,
					]}
				/>
			</View>
			<View style={chatItemStyles.textualBlock}>
				<Text style={chatItemStyles.nameLabel}>
					{data.participant.name}
				</Text>
				<Text style={chatItemStyles.textLabel}>
					{data.lastMessage &&
						`${data.participant.name}: ${data.lastMessage.text}`}
				</Text>
			</View>
			<Text style={chatItemStyles.sentAtLabel}>17:29</Text>
		</View>
	);
}

export function ChatList() {
	const chats = TEST_CHAT_LIST_DATA;
	return (
		<FlatList
			contentContainerStyle={chatListStyles.chatListContainer}
			data={chats}
			renderItem={({ item }) => <ChatItem data={item} />}
			keyExtractor={(item) => `${item.id}`}
			style={chatListStyles.chatList}
		/>
	);
}
