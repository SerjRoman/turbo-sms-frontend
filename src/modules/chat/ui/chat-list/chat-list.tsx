import { FlatList, View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { chatItemStyles, chatListStyles } from "./chat-list.styles";
import { ChatWithContactInfo } from "../../model";
import { apiThumbnailUrl, apiMediaUrl } from "@shared/api";
import { useRouter } from "expo-router";

export interface ChatItemProps {
	chat: ChatWithContactInfo;
	isUserOnline: (userId: number) => boolean;
	isMyMessage: (senderId: number) => boolean;
}
interface ChatListProps {
	chats: ChatWithContactInfo[];
	onlineUserIds: Set<number>;
	isMyMessage: (senderId: number) => boolean;
}
function ChatItem(props: ChatItemProps) {
	const { chat, isUserOnline, isMyMessage } = props;
	const isOnline = isUserOnline(chat.participant.id);
	const isMyMessageFlag = isMyMessage(Number(chat.lastMessage?.senderId));
	const fullname = chat.isInContact
		? chat.participant.contactsOf.localName
		: `${chat.participant.name} ${chat.participant.surname}`;
	const senderName = isMyMessageFlag ? "You" : fullname;
	const avatar = chat.isInContact
		? chat.participant.contactsOf.avatar
		: chat.participant.avatar;
	const router = useRouter();
	return (
		<TouchableOpacity
			onPress={() => {
				router.push(`/chat/${chat.id}`);
			}}
			style={chatItemStyles.container}
		>
			<View style={chatItemStyles.avatarChatBlock}>
				<Image
					source={`${apiMediaUrl}${avatar}`}
					placeholder={`${apiThumbnailUrl}${avatar}`}
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
				<Text style={chatItemStyles.nameLabel}>{fullname}</Text>
				<Text style={chatItemStyles.textLabel}>
					{chat.lastMessage &&
						`${senderName}: ${chat.lastMessage.text}`}
				</Text>
			</View>
			<Text style={chatItemStyles.sentAtLabel}>
				{chat.lastMessage?.createdAt}
			</Text>
		</TouchableOpacity>
	);
}

export function ChatList(props: ChatListProps) {
	const { chats, onlineUserIds, isMyMessage } = props;
	function isUserOnline(userId: number) {
		return onlineUserIds.has(userId);
	}
	return (
		<FlatList
			contentContainerStyle={chatListStyles.chatListContainer}
			data={chats}
			renderItem={({ item }) => (
				<ChatItem
					chat={item}
					isUserOnline={isUserOnline}
					isMyMessage={isMyMessage}
				/>
			)}
			keyExtractor={(item) => `${item.id}`}
			style={chatListStyles.chatList}
		/>
	);
}
