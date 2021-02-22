import React from "react";
import { Text, StyleSheet } from "react-native";

import { AppTextStyles } from "../../config/styles";

function AppText({ children, style, ...rest }) {
	return (
		<Text {...rest} style={[AppTextStyles.default, styles.text, { ...style }]}>
			{children}
		</Text>
	);
}

const styles = StyleSheet.create({
	text: {
		fontWeight: "600",
	},
});

export default AppText;
