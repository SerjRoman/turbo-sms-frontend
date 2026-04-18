import { Text, TouchableOpacity } from "react-native";
import { Header } from "../header";
import { HeaderProps } from "../header.types";
import { Icons } from "../../icons";
import { useRouter } from "expo-router";
import { styles } from "./header-back.styles";
import { COLORS } from "../../../constants/colors";

export function HeaderBack(props: Omit<HeaderProps, "left">) {
	const router = useRouter();
	return (
		<Header
			left={
				<TouchableOpacity
					onPress={() => {
						if (router.canGoBack()) router.back();
					}}
					style={styles.button}
				>
					<Icons.ArrowBackIcon fill={COLORS.brownPrimary} />
					<Text style={styles.text}>Back</Text>
				</TouchableOpacity>
			}
			{...props}
		/>
	);
}
