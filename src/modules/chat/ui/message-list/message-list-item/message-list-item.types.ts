import { Message } from "../../../model";

export interface BaseMessageProps {
	message: Message;
    userId: number
}

export interface MessageListItemProps extends BaseMessageProps {}

export interface MediaMessageProps extends BaseMessageProps {}
export interface TextMessageProps extends BaseMessageProps {}
