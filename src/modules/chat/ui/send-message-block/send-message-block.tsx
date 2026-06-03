import { styles } from "./send-message-block.styles";
import { Alert, TouchableOpacity, View } from "react-native";
import { Input } from "@shared/ui/input";
import { Icons } from "@shared/ui/icons";
import { useState } from "react";
import { ClientSocket } from "@shared/api";
import type { SendMessageBlockProps } from "./send-message-block.types";
import { pickImage } from "@shared/tools/pick-image";
import { useUploadMessageMediaMutation } from "../../api";

export function SendMessageBlock(props: SendMessageBlockProps) {
	const { chatId } = props;
	const [fileUrl, setFileUrl] = useState<string | null>(null);
	const [text, setText] = useState<string>("");
	const [uploadMessageMedia] = useUploadMessageMediaMutation();
	// TODO: Keyborad
	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.iconButton}
				onPress={async () => {
					const response = await pickImage(false, {
						mediaTypes: "images",
						selectionLimit: 1,
						allowsEditing: true,
						allowsMultipleSelection: false,
					});
					if (response.status === "error") {
						Alert.alert(
							"Error",
							response.message ||
								"Unknown error occurred while picking image.",
						);
						return;
					}
					const asset = response.assets[0];
					setFileUrl(asset.uri);
				}}
			>
				<Icons.PaperclipIcon />
			</TouchableOpacity>
			<Input
				value={text}
				onChangeText={(v) => setText(v)}
				inputContainerStyle={styles.inputContainer}
				style={styles.input}
				multiline
			/>
			<TouchableOpacity
				style={styles.iconButton}
				onPress={async () => {
					if (fileUrl) {
						try {
							const { media } = await uploadMessageMedia({
								media: fileUrl,
							}).unwrap();
							ClientSocket.emit("sendMessage", {
								type: "media",
								chatId,
								media: media,
							});
						} catch (e) {
							console.error("Failed to upload media:", e);
							Alert.alert(
								"Error",
								"Failed to upload media. Please try again.",
							);
							return;
						}
						setFileUrl("");
					}
					if (text.length < 1) return;
					ClientSocket.emit("sendMessage", {
						type: "text",
						text,
						chatId,
					});
					setText("");
				}}
			>
				<Icons.PaperplaneIcon />
			</TouchableOpacity>
		</View>
	);
}
