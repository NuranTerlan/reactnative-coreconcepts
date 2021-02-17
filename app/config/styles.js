import { Platform } from "react-native";

import colors from "./colors";

const AppTextStyles = {
	default: {
		color: colors.dark,
		fontSize: 16,
		fontFamily: Platform.select({
			ios: "San Francisco",
			android: "Roboto",
		}),
	},
	heading: {
		fontSize: 22,
		fontWeight: "bold",
		color: "#303841",
	},
};

const GlobalStyles = {
	colors,
};

export { AppTextStyles, GlobalStyles };
