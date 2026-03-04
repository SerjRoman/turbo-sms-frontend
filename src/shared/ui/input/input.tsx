import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { InputPasswordProps, InputProps } from "./input.types";
import { Icons } from "../icons";
import { styles } from "./input.styles";
import { useState } from "react";

export function Input(props: InputProps) {
	const {
		label,
		error,
		iconLeft,
		iconRight,
		style,
		inputContainerStyle,
		labelStyle,
		...restProps
	} = props;
	return (
		<View>
			{label && <Text style={[styles.label, labelStyle]}>{label}</Text>}

			<View style={[styles.inputContainer, inputContainerStyle]}>
				{iconLeft}
				<TextInput
					style={[styles.input, style]}
					{...restProps}
				></TextInput>
				{iconRight}
			</View>

			{error && (
				<View style={styles.errorContainer}>
					<Icons.ErrorIcon
						width={16}
						height={16}
						viewBox="0 0 16 16"
					/>
					<Text style={styles.errorText}>{error}</Text>
				</View>
			)}
		</View>
	);
}

function Password(props: InputPasswordProps) {
	const [isHidden, setIsHidden] = useState<boolean>(true);
	const EyeIcon = isHidden ? (
		<Icons.EyeClosedIcon></Icons.EyeClosedIcon>
	) : (
		<Icons.EyeOpenedIcon></Icons.EyeOpenedIcon>
	);
	function handleToggleVisibility() {
		setIsHidden(!isHidden);
	}
	return (
		<Input
			{...props}
			iconLeft={
				<Icons.KeyIcon width={32} height={32} viewBox="0 0 32 32" />
			}
			iconRight={
				<TouchableOpacity
					onPress={handleToggleVisibility}
					style={styles.passwordButton}
				>
					{EyeIcon}
				</TouchableOpacity>
			}
			secureTextEntry={isHidden}
		/>
	);
}

Input.Password = Password;
