import { Text, View } from "react-native";
import { Image } from "expo-image";
import { styles } from "./message-list-item.styles";
import type {
	MediaMessageProps,
	MessageListItemProps,
	TextMessageProps,
} from "./message-list-item.types";
import { Icons } from "@shared/ui/icons";
import { apiMediaUrl, apiThumbnailUrl } from "@shared/api";

function TextMessage({ message, userId }: TextMessageProps) {
	const time = new Date(message.createdAt);
	return (
		<View>
			<Text>{message.text}</Text>
		</View>
	);
}
function MediaMessage({ message, userId }: MediaMessageProps) {
	const time = new Date(message.createdAt);
	return (
		<View>
			<Image
				style={{ width: 200, height: 200 }}
				source={{ uri: `${apiThumbnailUrl}${message.media}` }}
			/>
		</View>
	);
}

export function MessageListItem(props: Readonly<MessageListItemProps>) {
	const { message, userId } = props;
	return (
		<View
			style={[
				styles.wrapper,
				message.senderId === userId
					? styles.senderWrapper
					: styles.authorWrapper,
			]}
		>
			{message.type === "text" ? (
				<TextMessage message={message} userId={userId} />
			) : (
				<MediaMessage message={message} userId={userId} />
			)}
		</View>
	);
}
