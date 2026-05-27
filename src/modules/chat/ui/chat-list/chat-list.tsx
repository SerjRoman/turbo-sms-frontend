import { FlatList, View, Text } from "react-native";
import { Image } from "expo-image";
import { chatItemStyles, chatListStyles } from "./chat-list.styles";
import { ChatWithContactInfo } from "../../model";
import { apiThumbnailUrl, apiMediaUrl } from "@shared/api";

export interface ChatItemProps {
	data: ChatWithContactInfo;
	isUserOnline: (userId: number) => boolean;
	isMyMessage: (senderId: number) => boolean;
}
interface ChatListProps {
	chats: ChatWithContactInfo[];
	onlineUserIds: Set<number>;
	isMyMessage: (senderId: number) => boolean;
}
function ChatItem(props: ChatItemProps) {
	const { data, isUserOnline, isMyMessage } = props;
	const isOnline = isUserOnline(props.data.participant.id);
	const isMyMessageFlag = isMyMessage(Number(data.lastMessage?.senderId));
	const fullname = data.isInContact
		? data.participant.contactsOf.localName
		: `${data.participant.name} ${data.participant.surname}`;
	const senderName = isMyMessageFlag ? "You" : fullname;
	const avatar = data.isInContact
		? data.participant.contactsOf.avatar
		: data.participant.avatar;
	return (
		<View style={chatItemStyles.wholeChatBlock}>
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
					{data.lastMessage &&
						`${senderName}: ${data.lastMessage.text}`}
				</Text>
			</View>
			<Text style={chatItemStyles.sentAtLabel}>
				{data.lastMessage?.createdAt}
			</Text>
		</View>
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
					data={item}
					isUserOnline={isUserOnline}
					isMyMessage={isMyMessage}
				/>
			)}
			keyExtractor={(item) => `${item.id}`}
			style={chatListStyles.chatList}
		/>
	);
}
