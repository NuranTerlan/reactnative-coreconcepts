import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageScreen(props) {
	return (
		<View style={styles.container}>
			<View style={[styles.icon, styles.closeIcon]}>
				<MaterialCommunityIcons name="close" size={35} />
			</View>
			<View style={[styles.icon, styles.deleteIcon]}>
				<MaterialCommunityIcons name="trash-can-outline" size={35} />
			</View>
			<Image
				resizeMode="contain"
				style={styles.image}
				source={require("../assets/chair.jpg")}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	closeIcon: {
		right: 30,
	},
	deleteIcon: {
		left: 30,
	},
	container: {
		backgroundColor: colors.white,
		flex: 1,
	},
	icon: {
		position: "absolute",
		top: 50,
	},
	image: {
		width: "100%",
		height: "100%",
	},
});

export default ViewImageScreen;
