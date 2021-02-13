import React from "react";
import { FlatList, StyleSheet } from "react-native";

import CrossScreen from "./../components/CrossScreen";
import SectionListItem from "./../components/SectionListItem";
import ListItemSeperator from "./../components/ListItemSeperator";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

const sectionItems = [
	{
		id: 1,
		title: "Listings",
		icon: "format-list-bulleted",
		color: colors.primary,
	},
	{
		id: 2,
		title: "Messages",
		icon: "email",
		color: colors.secondary,
	},
	{
		id: 3,
		title: "Log Out",
		icon: "logout",
		color: colors.warning,
	},
];

function MyAccountScreen() {
	return (
		<CrossScreen bg={colors.light}>
			<ListItem
				title="Nuran Terlan"
				description="nuran.terlan@mail.ru"
				image={require("../assets/nuran.jpg")}
				mv={30}
			/>
			<FlatList
				data={sectionItems}
				keyExtractor={(section) => section.id.toString()}
				renderItem={({ item }) => (
					<SectionListItem
						mt={item.id === 3 ? 20 : 0}
						title={item.title}
						icon={item.icon}
						color={item.color}
					/>
				)}
				ItemSeparatorComponent={ListItemSeperator}
			/>
		</CrossScreen>
	);
}

const styles = StyleSheet.create({});

export default MyAccountScreen;
