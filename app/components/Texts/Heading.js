import React from "react";
import { StyleSheet } from "react-native";

import AppText from "./AppText";

function Heading({ children, style }) {
	return <AppText style={[styles.text, { ...style }]}>{children}</AppText>;
}

const styles = StyleSheet.create({
	text: {
		fontSize: 22,
		fontWeight: "bold",
		color: "#303841",
	},
});

export default Heading;
