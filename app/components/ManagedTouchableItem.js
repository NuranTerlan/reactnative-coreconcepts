import React from "react";
import { TouchableHighlight } from "react-native";
import colors from "../config/colors";

function ManagedTouchableItem({
	children,
	color = colors.secondary,
	onPress,
	mt,
	mb,
	mv,
	mh,
}) {
	return (
		<TouchableHighlight
			style={{
				marginTop: mt,
				marginBottom: mb,
				marginVertical: mv,
				marginHorizontal: mh,
			}}
			underlayColor={color}
			onPress={onPress}
		>
			{children}
		</TouchableHighlight>
	);
}

export default ManagedTouchableItem;
