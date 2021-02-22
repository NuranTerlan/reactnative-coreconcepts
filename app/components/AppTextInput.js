import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import { AppTextStyles } from "../config/styles";

function AppTextInput({ icon, ...rest }) {
	return (
		<View style={styles.container}>
			{icon && (
				<MaterialCommunityIcons
					name={icon}
					size={20}
					color={colors.medium}
					style={styles.icon}
				/>
			)}
			<TextInput
				placeholderTextColor={colors.medium}
				style={[AppTextStyles.default, styles.input]}
				{...rest}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.light,
		borderRadius: 99,
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
		paddingVertical: 15,
		paddingHorizontal: 22,
		marginVertical: 10,
		overflow: "hidden",
	},
	icon: {
		marginRight: 10,
	},
	input: {
		flex: 1,
	},
});

export default AppTextInput;
