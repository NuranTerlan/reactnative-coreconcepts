import React from "react";

import { AppTextStyles } from "../../config/styles";

import AppText from "./AppText";

function Heading({ children, style }) {
	return (
		<AppText style={[AppTextStyles.heading, { ...style }]}>{children}</AppText>
	);
}

export default Heading;
