import React, { useState } from "react";
import {
	View,
	StyleSheet,
	TouchableWithoutFeedback,
	Modal,
	Button,
	FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import { AppText } from "./Texts";
import PickerItem from "./PickerItem";

function AppPicker({
	icon,
	placeholder,
	onSelectItem,
	selectedItem,
	items,
	PickerItemComponent = PickerItem,
	numberOfColumns = 1,
}) {
	const [isModalVisible, setIsModalVisible] = useState(false);

	return (
		<>
			<TouchableWithoutFeedback onPress={() => setIsModalVisible(true)}>
				<View style={styles.container}>
					{icon && (
						<MaterialCommunityIcons
							name={icon}
							size={20}
							color={colors.medium}
							style={styles.icon}
						/>
					)}
					{selectedItem ? (
						<AppText style={styles.text}>{selectedItem.label}</AppText>
					) : (
						<AppText style={styles.placeholder}>{placeholder}</AppText>
					)}
					<MaterialCommunityIcons
						name="chevron-down"
						size={20}
						color={colors.medium}
					/>
				</View>
			</TouchableWithoutFeedback>
			<Modal visible={isModalVisible} animationType="slide">
				<Button title="Close" onPress={() => setIsModalVisible(false)} />
				<View style={styles.list}>
					<FlatList
						data={items}
						keyExtractor={(item) => item.value.toString()}
						numColumns={numberOfColumns}
						renderItem={({ item }) => (
							<PickerItemComponent
								item={item}
								onPress={() => {
									setIsModalVisible(false);
									onSelectItem(item);
								}}
							/>
						)}
					/>
				</View>
			</Modal>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.light,
		borderRadius: 99,
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
		padding: 15,
		marginVertical: 10,
		overflow: "hidden",
	},
	text: {
		flex: 1,
	},
	placeholder: {
		color: colors.medium,
		flex: 1,
	},
	icon: {
		marginRight: 10,
	},
	list: {
		alignItems: "center",
	},
});

export default AppPicker;
