import type { HeaderProps } from "./header.types";
import { styles } from "./header.styles";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Header(props: HeaderProps) {
	const { bottom, left, right, title } = props;
	return (
		<SafeAreaView edges={["top"]} style={styles.container}>
			<View style={styles.topHeaderContainer}>
				{left && <View>{left}</View>}
				{!!title && <Text style={styles.titleContainer}>{title}</Text>}
				{right && <View>{right}</View>}
			</View>
			{bottom && <View>{bottom}</View>}
		</SafeAreaView>
	);
}
