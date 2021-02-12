import React from "react";
import { View } from "react-native";

import colors from "../../../config/colors";
import AuthButton from "./AuthButton";

function LoginButton({ style }) {
	return (
		<View style={style}>
			<AuthButton
				action={() => console.log("Login")}
				type="Login"
				bg={colors.primary}
			/>
		</View>
	);
}

export default LoginButton;