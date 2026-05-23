export interface Message {
    id: number;
    type: string;
    text: string | null;
    mediaUrl: string | null;
    createdAt: string;
    updatedAt: string;
    chatId: number;
    lastChatId: number;
    senderId: number;
}