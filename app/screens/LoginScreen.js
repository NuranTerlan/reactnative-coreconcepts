import React from "react";
import { Image, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import CrossScreen from "../components/CrossScreen";
import AppTextInput from "../components/AppTextInput";
import { LoginButton } from "../components/Buttons/AuthButtons";
import { AppText } from "../components/Texts";

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
	return (
		<CrossScreen style={styles.screen}>
			<Image style={styles.logo} source={require("../assets/logo-red.png")} />

			<Formik
				initialValues={{ email: "", password: "" }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				{({ handleChange, handleSubmit, errors }) => (
					<>
						<AppTextInput
							placeholder="Email"
							icon="email"
							autoCapitalize="none"
							autoCorrect={false}
							keyboardType="email-address"
							// textContentType ~ only works in ios devices
							textContentType="emailAddress"
							onChangeText={handleChange("email")}
						/>
						{errors.email && (
							<AppText style={{ color: "red" }}>{errors.email}</AppText>
						)}
						<AppTextInput
							placeholder="Password"
							icon="lock"
							autoCapitalize="none"
							autoCorrect={false}
							secureTextEntry
							// textContentType ~ only works in ios devices
							textContentType="password"
							onChangeText={handleChange("password")}
						/>
						{errors.password && (
							<AppText style={{ color: "red" }}>{errors.password}</AppText>
						)}
						<LoginButton style={styles.button} action={handleSubmit} />
					</>
				)}
			</Formik>
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
