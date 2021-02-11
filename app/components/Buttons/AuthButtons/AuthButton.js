import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

import BaseButton from "../BaseButton";

function AuthButton({ type, bg, color = "#fff", action }) {
	return (
		<BaseButton
			onPress={action}
			style={styles.authButton}
			bg={bg}
			color={color}
			isFullWidth
		>
			<Text
				style={[
					{
						color: color,
					},
					styles.text,
				]}
			>
				{type}
			</Text>
		</BaseButton>
	);
}

const styles = StyleSheet.create({
	authButton: {
		paddingVertical: 12,
		elevation: 12,
	},
	text: {
		fontFamily: Platform.OS === "android" ? "Roboto" : "San Francisco",
		fontSize: 18,
		fontWeight: "bold",
		textTransform: "uppercase",
	},
});

export default AuthButton;
