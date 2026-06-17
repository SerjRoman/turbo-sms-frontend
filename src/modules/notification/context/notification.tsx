import {
	createContext,
	PropsWithChildren,
	useContext,
	useEffect,
	useState,
} from "react";
import {
	requestNotificationPermission,
	sendMessageNotification,
} from "../model";
import { ChatWithParticipantInfo, ClientSocket } from "@shared/api";
import { useUserContext } from "@modules/auth";

interface NotifcationContextValue {
	activeChatId: number | null;
	setActiveChatId: (id: number | null) => void;
}

const NotificationContext = createContext<null | NotifcationContextValue>(null);

export function useNotificationContext() {
	const ctx = useContext(NotificationContext);
	if (!ctx)
		throw new Error("Notification Context is now wrapped in Provider");
	return ctx;
}
export function NotificationProvider(props: Readonly<PropsWithChildren>) {
	const [activeChatId, setActiveChatId] = useState<number | null>(null);
	const { user } = useUserContext();
	useEffect(() => {
		(async () => await requestNotificationPermission())();
	}, []);
	useEffect(() => {
		async function handleChatUpdate(chat: ChatWithParticipantInfo) {
			if (
				chat.id === activeChatId ||
				!chat.lastMessage ||
				chat.lastMessage.senderId === user?.id ||
				!user
			)
				return;
			const sender = chat.participants.find(
				(p) => p.userId === chat.lastMessage?.senderId,
			);
			const message =
				chat.lastMessage.type === "text"
					? chat.lastMessage.text?.slice(0, 30) || "New message"
					: "New image was sent";
			const fullname = sender?.user.name + " " + sender?.user.surname;
			await sendMessageNotification(fullname, message);
		}
		ClientSocket.on("chatUpdate", handleChatUpdate);
		return () => {
			ClientSocket.off("chatUpdate", handleChatUpdate);
		};
	}, [activeChatId]);
	return (
		<NotificationContext value={{ activeChatId, setActiveChatId }}>
			{props.children}
		</NotificationContext>
	);
}


/*
1. npx expo install
2. npx expo-doctor

*/