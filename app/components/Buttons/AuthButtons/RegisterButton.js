import React from "react";
import { View } from "react-native";

import colors from "../../../config/colors";
import AuthButton from "./AuthButton";

function RegisterButton({ style }) {
	return (
		<View style={style}>
			<AuthButton
				action={() => console.log("Registration")}
				type="Register"
				bg={colors.secondary}
			/>
		</View>
	);
}

export default RegisterButton;
