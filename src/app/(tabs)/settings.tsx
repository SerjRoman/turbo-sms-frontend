import { Button } from "@shared/ui/button";
import { View, Text } from "react-native";
import RadioGroup, { RadioButtonProps } from "react-native-radio-buttons-group";

const radioButtons: RadioButtonProps[] = [
	{
		id: "yes",
		label: "Yes",
		size: 24,
		value: "yes",
	},
	{
		id: "no",
		label: "No",
		size: 24,
		value: "no",
	},
];

export default function Settings() {
	return (
		<View style={{ flex: 1 }}>
			<View>
				<Text></Text>
				<View>
					<Text></Text>
					<Button />
				</View>
				<View>
					<Text></Text>
					<Button />
				</View>
			</View>
			<View>
				<Text></Text>
				<RadioGroup radioButtons={radioButtons} />
			</View>
			<View>
				<Text>
					{" "}
					<Text></Text>
				</Text>
				<Text>
					{" "}
					<Text></Text>
				</Text>
				<Text>
					{" "}
					<Text></Text>
				</Text>
			</View>
		</View>
	);
}
