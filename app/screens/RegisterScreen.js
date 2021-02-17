import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import CrossScreen from "../components/CrossScreen";
import { RegisterButton } from "../components/Buttons/AuthButtons";
import AppFormField from "../components/forms/AppFormField";
import AppForm from "../components/forms/AppForm";

const validationSchema = Yup.object().shape({
	name: Yup.string().required().label("Name"),
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
	return (
		<CrossScreen style={styles.screen}>
			<AppForm
				initialValues={{ name: "", email: "", password: "" }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				<AppFormField
					name="name"
					placeholder="Name"
					icon="account"
					autoCapitalize="words"
					autoCorrect={false}
				/>
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
				<RegisterButton style={styles.button} />
			</AppForm>
		</CrossScreen>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 20,
	},
	button: {
		marginTop: 20,
	},
});

export default RegisterScreen;
