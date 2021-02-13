import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { AppText } from "./Texts";
import colors from "../config/colors";
import ManagedTouchableItem from "./ManagedTouchableItem";

function SectionListItem({
	title,
	icon,
	color,
	onPress = () => console.log(),
	style,
	mt,
	mb,
	mv,
	mh,
}) {
	return (
		<ManagedTouchableItem onPress={onPress} mt={mt} mb={mb} mv={mv} mh={mh}>
			<View style={[styles.container, { ...style }]}>
				<View
					style={[
						{
							backgroundColor: color,
						},
						styles.icon,
					]}
				>
					<MaterialCommunityIcons name={icon} size={20} color={colors.white} />
				</View>
				<AppText style={styles.title}>{title}</AppText>
			</View>
		</ManagedTouchableItem>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		padding: 15,
		backgroundColor: colors.white,
	},
	icon: {
		width: 35,
		height: 35,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 35 / 2,
		marginRight: 10,
	},
});

export default SectionListItem;
