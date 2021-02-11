import React from "react";
import { Text, Image, ImageBackground, StyleSheet, View } from "react-native";

import { LoginButton, RegisterButton } from "../components/Buttons/AuthButtons";
import { Heading } from "../components/Texts";

function WelcomeScreen(props) {
	return (
		<ImageBackground
			style={styles.background}
			blurRadius={3}
			source={require("../assets/background.jpg")}
		>
			<View style={styles.logoContainer}>
				<Image style={styles.logo} source={require("../assets/logo-red.png")} />
				<Heading style={styles.heading}>Sell What You Don't Need</Heading>
			</View>
			<View style={styles.authBtns}>
				<LoginButton style={styles.loginBtn} />
				<RegisterButton />
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	authBtns: {
		width: "100%",
		paddingHorizontal: 20,
		paddingBottom: 30,
	},
	loginBtn: {
		marginBottom: 20,
	},
	background: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	logoContainer: {
		position: "absolute",
		top: 70,
		alignItems: "center",
	},
	logo: {
		width: 100,
		height: 100,
	},
	heading: {
		marginTop: 15,
	},
});

export default WelcomeScreen;
