import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import CrossScreen from "../components/CrossScreen";
import { LoginButton } from "../components/Buttons/AuthButtons";
import AppFormField from "../components/forms/AppFormField";
import AppForm from "../components/forms/AppForm";

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
	return (
		<CrossScreen style={styles.screen}>
			<Image style={styles.logo} source={require("../assets/logo-red.png")} />

			<AppForm
				initialValues={{ email: "", password: "" }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				<AppFormField
					name="email"
					placeholder="Email"
					icon="email"
					autoCapitalize="none"
					autoCorrect={false}
					keyboardType="email-address"
					// textContentType ~ only works in ios devices
					textContentType="emailAddress"
				/>
				<AppFormField
					name="password"
					placeholder="Password"
					icon="lock"
					autoCapitalize="none"
					autoCorrect={false}
					secureTextEntry
					// textContentType ~ only works in ios devices
					textContentType="password"
				/>
				<LoginButton style={styles.button} />
			</AppForm>
		</CrossScreen>
	);
}

const styles = StyleSheet.create({
	screen: {
		paddingHorizontal: 20,
	},
	logo: {
		width: 80,
		height: 80,
		alignSelf: "center",
		marginTop: 50,
		marginBottom: 30,
	},
	button: {
		marginTop: 20,
	},
});

export default LoginScreen;
