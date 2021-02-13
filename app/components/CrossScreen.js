import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";

function CrossScreen({ children, bg = "#fff", style }) {
	return (
		<SafeAreaView
			style={[
				{
					backgroundColor: bg,
				},
				styles.screen,
			]}
		>
			<View style={[{ ...style }]}>{children}</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	screen: {
		paddingTop: Constants.statusBarHeight,
		flex: 1,
	},
});

export default CrossScreen;
