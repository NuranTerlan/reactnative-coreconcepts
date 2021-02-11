import React from "react";
import { Text, StyleSheet } from "react-native";

function Heading({ children, style }) {
	return <Text style={[styles.text, { ...style }]}>{children}</Text>;
}

const styles = StyleSheet.create({
	text: {
		fontFamily: Platform.OS === "android" ? "Roboto" : "San Francisco",
		fontSize: 22,
		fontWeight: "bold",
		color: "#303841",
	},
});

export default Heading;
