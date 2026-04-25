import { Header } from "@shared/ui/header";
import { Images } from "@shared/ui/images";
import { Icons } from "@shared/ui/icons";
import { Input } from "@shared/ui/input";
import { COLORS } from "@shared/constants/colors";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

export function HeaderContacts() {
	const router = useRouter();
	return (
		<Header
			left={<Images.LogoImage style={{ width: 40, height: 40 }} />}
			title="Contacts"
			right={
				<TouchableOpacity
					onPress={() => router.push("/create-contact/step-one")}
				>
					<Icons.PlusIcon />
				</TouchableOpacity>
			}
			bottom={
				<Input
					iconLeft={<Icons.SearchIcon />}
					placeholder="Search"
					inputContainerStyle={{
						backgroundColor: COLORS.greyBackground,
						height: 40,
						borderWidth: 1,
						borderRadius: 16,
						borderColor: COLORS.grey,
					}}
				/>
			}
		/>
	);
}
