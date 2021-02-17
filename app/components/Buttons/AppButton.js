import React from "react";
import { Text, StyleSheet } from "react-native";

import BaseButton from "./BaseButton";
import { AppTextStyles } from "../../config/styles";

function AppButton({ children, bg, color = "#fff", action }) {
	return (
		<BaseButton
			onPress={action}
			style={styles.button}
			bg={bg}
			color={color}
			isFullWidth
		>
			<Text
				style={[
					AppTextStyles.default,
					{
						color: color,
					},
					styles.text,
				]}
			>
				{children}
			</Text>
		</BaseButton>
	);
}

const styles = StyleSheet.create({
	button: {
		paddingVertical: 12,
		elevation: 12,
	},
	text: {
		fontWeight: "bold",
		textTransform: "uppercase",
	},
});

export default AppButton;
