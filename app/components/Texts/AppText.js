import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

function AppText({ children, style }) {
	return <Text style={[styles.text, { ...style }]}>{children}</Text>;
}

const styles = StyleSheet.create({
	text: {
		fontFamily: Platform.OS === "android" ? "Roboto" : "San Francisco",
		fontSize: 16,
		fontWeight: "600",
	},
});

export default AppText;
