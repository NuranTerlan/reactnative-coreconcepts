import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import { AppText } from "./Texts";

function CategoryPickerItem({ item, onPress }) {
	return (
		<TouchableOpacity onPress={onPress} style={styles.container}>
			<View style={[styles.icon, { backgroundColor: item.background }]}>
				<MaterialCommunityIcons
					name={item.icon}
					size={60}
					color={colors.white}
				/>
			</View>
			<AppText style={styles.label}>{item.label}</AppText>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 25,
		alignItems: "center",
		width: "33%",
	},
	icon: {
		width: 90,
		height: 90,
		borderRadius: 45,
		justifyContent: "center",
		alignItems: "center",
	},
	label: {
		marginTop: 10,
		textAlign: "center",
	},
});

export default CategoryPickerItem;
