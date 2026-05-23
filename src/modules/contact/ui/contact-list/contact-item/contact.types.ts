export interface ContactProps {
	id: number;
	localName: string;
	avatar: string | null;
	onPress?: () => void;
}
