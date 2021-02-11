import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

function BaseButton({
	children,
	bg = "#000",
	isFullWidth = false,
	onPress = () => {},
	style,
}) {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={[
				{
					width: isFullWidth ? "100%" : "auto",
					backgroundColor: bg,
				},
				styles.button,
				{ ...style },
			]}
		>
			{children}
		</TouchableOpacity>
	);
}

const styles = StyleSheet.flatten({
	button: {
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 99,
	},
});

export default BaseButton;
