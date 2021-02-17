import React from "react";
import { View } from "react-native";
import { useFormikContext } from "formik";

import colors from "../../../config/colors";
import AuthButton from "./AuthButton";

function RegisterButton({ action, style }) {
	const { values } = useFormikContext();

	return (
		<View style={style}>
			<AuthButton
				action={
					action
						? action
						: () => {
								for (let prop in values) {
									console.log(`${prop}: ${values[prop]}`);
								}
						  }
				}
				type="Register"
				bg={colors.primary}
			/>
		</View>
	);
}

export default RegisterButton;
