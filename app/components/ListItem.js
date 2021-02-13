import React from "react";
import { View, Image, TouchableHighlight, StyleSheet } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import { AppText } from "./Texts";
import colors from "../config/colors";
import ManagedTouchableItem from "./ManagedTouchableItem";

function ListItem({
	title,
	description,
	image,
	onPress = () => console.log(),
	renderRightActions,
	style,
	mt,
	mb,
	mv,
	mh,
}) {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<ManagedTouchableItem onPress={onPress} mt={mt} mb={mb} mv={mv} mh={mh}>
				<View style={[styles.container, { ...style }]}>
					<Image style={styles.image} source={image} />
					<View>
						<AppText style={styles.title}>{title}</AppText>
						<AppText style={styles.description}>{description}</AppText>
					</View>
				</View>
			</ManagedTouchableItem>
		</Swipeable>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		padding: 15,
		backgroundColor: colors.white,
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
		marginRight: 10,
	},
	title: {
		fontWeight: "bold",
		marginBottom: 2,
	},
	description: {
		fontSize: 14,
		color: colors.medium,
	},
});

export default ListItem;
