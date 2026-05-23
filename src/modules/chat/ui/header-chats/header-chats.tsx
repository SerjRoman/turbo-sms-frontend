import { Input } from "@shared/ui/input";
import { COLORS } from "@shared/constants/colors";
import { Images } from "@shared/ui/images";
import { Icons } from "@shared/ui/icons";
import { Header } from "@shared/ui/header";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

export function HeaderChats() {
	const router = useRouter();
	return (
		<Header
			left={<Images.LogoImage style={{ width: 40, height: 40 }} />}
			title="Chats"
			right={
				<TouchableOpacity onPress={() => router.push("/create-chat")}>
					<Icons.PlusIcon style={{ width: 40, height: 40 }} />
				</TouchableOpacity>
			}
			bottom={
				<Input
					iconLeft={<Icons.SearchIcon />}
					placeholder="Search"
					inputContainerStyle={{
						backgroundColor: COLORS.greyBackground,
						borderWidth: 1,
						borderColor: COLORS.grey,
						height: 40,
					}}
				/>
			}
		/>
	);
}
