import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import CrossScreen from "../components/CrossScreen";
import {
	AppForm,
	AppFormField as Field,
	AppFormPicker as Picker,
} from "../components/forms";
import CategoryPickerItem from "./../components/CategoryPickerItem";

const validationSchema = Yup.object().shape({
	title: Yup.string().required().min(1).label("Title"),
	price: Yup.number().required().min(1).max(10000).label("Price"),
	description: Yup.string().label("Description"),
	category: Yup.object().required().nullable().label("Category"),
});

const categories = [
	{
		label: "Furniture",
		value: 1,
		background: "#ffcb91",
		icon: "table-furniture",
	},
	{ label: "Cars", value: 2, background: "#eabf9f", icon: "car" },
	{ label: "Cameras", value: 3, background: "#a4ebf3", icon: "camera" },
	{ label: "Games", value: 4, background: "#ffb4b4", icon: "billiards" },
	{ label: "Clothing", value: 5, background: "#eb5e0b", icon: "clothes" },
	{
		label: "Sports",
		value: 6,
		background: "#f2a154",
		icon: "arm-flex-outline",
	},
	{
		label: "Movies & Music",
		value: 7,
		background: "#9a8194",
		icon: "music-note",
	},
	{ label: "Books", value: 8, background: "#6ddccf", icon: "book" },
	{ label: "Other", value: 9, background: "#ebd8b7", icon: "apps" },
];

function ListingEditScreen(props) {
	return (
		<CrossScreen style={styles.container}>
			<AppForm
				initialValues={{
					title: "",
					price: "",
					description: "",
					category: null,
				}}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				<Field maxLength={255} name="title" placeholder="Title" />
				<Field
					keyboardType="numeric"
					maxLength={8}
					name="price"
					placeholder="Price"
				/>
				<Picker
					numberOfColumns={3}
					PickerItemComponent={CategoryPickerItem}
					items={categories}
					name="category"
					placeholder="Category"
				/>
				<Field
					multiline
					numberOfLines={2}
					maxLength={255}
					name="description"
					placeholder="Description"
				/>
			</AppForm>
		</CrossScreen>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 15,
	},
});

export default ListingEditScreen;
