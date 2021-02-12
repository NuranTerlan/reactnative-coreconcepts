import React from "react";
import { Image, View, StyleSheet } from "react-native";

import { AppText } from "../components/Texts";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

function ListingDetailsScreen(props) {
	return (
		<View>
			<Image style={styles.image} source={require("../assets/jacket.jpg")} />
			<View style={styles.details}>
				<AppText style={styles.title}>Red Jacket for Sale</AppText>
				<AppText style={styles.price}>$100</AppText>
				<View style={styles.userContainer}>
					<ListItem
						image={require("../assets/mosh.jpg")}
						title="Mosh Hamedani"
						subTitle="5 Listings"
					/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	image: {
		width: "100%",
		height: 300,
	},
	details: {
		padding: 20,
	},
	title: {
		fontSize: 24,
		marginBottom: 10,
	},
	price: {
		color: colors.secondary,
		fontWeight: "bold",
		fontSize: 20,
	},
	userContainer: {
		marginTop: 40,
	},
});

export default ListingDetailsScreen;
