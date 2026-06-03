import { FlatList } from "react-native";
import { MessageListItem } from "./message-list-item";
import { Message } from "../../model";
import { styles } from "./message-list.styles";

interface MessageListProps {
	messages: Message[];
	handleLoadMore?: () => void;
	userId: number;
}

export function MessageList({
	messages,
	handleLoadMore,
	userId,
}: Readonly<MessageListProps>) {
	return (
		<FlatList
			data={messages}
			renderItem={({ item }) => (
				<MessageListItem message={item} userId={0} />
			)}
			contentContainerStyle={styles.contentContainer}
			inverted
			onEndReached={handleLoadMore}
			onEndReachedThreshold={0.2}
		/>
	);
}
