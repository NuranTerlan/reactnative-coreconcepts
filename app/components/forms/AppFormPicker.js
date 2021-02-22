import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import ErrorMessage from "../ErrorMessage";

function AppFormPicker({
	items,
	name,
	placeholder,
	PickerItemComponent,
	numberOfColumns,
}) {
	const { errors, setFieldValue, touched, values } = useFormikContext();

	return (
		<>
			<AppPicker
				items={items}
				numberOfColumns={numberOfColumns}
				onSelectItem={(item) => setFieldValue(name, item)}
				placeholder={placeholder}
				selectedItem={values[name]}
				PickerItemComponent={PickerItemComponent}
			/>
			<ErrorMessage error={errors[name]} isTouched={touched[name]} />
		</>
	);
}

export default AppFormPicker;
