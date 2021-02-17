import React from "react";
import { StyleSheet } from "react-native";

import { AppText } from "./Texts";

function ErrorMessage({ error, isTouched }) {
	return error && isTouched ? (
		<AppText style={styles.text}>{error}</AppText>
	) : null;
}

const styles = StyleSheet.create({
	text: {
		fontSize: 15,
		color: "red",
		marginLeft: 22,
	},
});

export default ErrorMessage;
