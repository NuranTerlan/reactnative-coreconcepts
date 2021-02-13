import React from "react";
import { FlatList, StyleSheet } from "react-native";

import CrossScreen from "../components/CrossScreen";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
	{
		id: 1,
		title: "Red jacket for sale",
		price: 100,
		image: require("../assets/jacket.jpg"),
	},
	{
		id: 2,
		title: "Couch in great condition",
		price: 1000,
		image: require("../assets/couch.jpg"),
	},
];

function ListingsScreen(props) {
	return (
		<CrossScreen bg={colors.light} style={styles.screen}>
			<FlatList
				data={listings}
				keyExtractor={(listing) => listing.id.toString()}
				renderItem={({ item }) => (
					<Card
						title={item.title}
						subTitle={"$" + item.price}
						image={item.image}
					/>
				)}
			/>
		</CrossScreen>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 20,
	},
});

export default ListingsScreen;
