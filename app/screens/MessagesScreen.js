import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import CrossScreen from "../components/CrossScreen";
import ListItem from "../components/ListItem";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDeleteAction from "./../components/ListItemDeleteAction";

const initialMessages = [
	{
		id: 1,
		title: "T1",
		description: "D1",
		image: require("../assets/nuran.jpg"),
	},
	{
		id: 2,
		title: "T2",
		description: "D2",
		image: require("../assets/nuran.jpg"),
	},
	{
		id: 3,
		title: "T3",
		description: "D3",
		image: require("../assets/nuran.jpg"),
	},
	{
		id: 4,
		title: "T4",
		description: "D4",
		image: require("../assets/nuran.jpg"),
	},
	{
		id: 5,
		title: "T5",
		description: "D5",
		image: require("../assets/nuran.jpg"),
	},
];

function MessagesScreen() {
	const [messages, setMessages] = useState(initialMessages);
	const [refreshing, setRefreshing] = useState(false);

	const handleDelete = (messageId) => {
		const updatedMessages = messages.filter((msg) => msg.id !== messageId);
		setMessages(updatedMessages);
	};

	return (
		<CrossScreen>
			<FlatList
				data={messages}
				keyExtractor={(msg) => msg.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						description={item.description}
						image={item.image}
						renderRightActions={() => (
							<ListItemDeleteAction onPress={() => handleDelete(item.id)} />
						)}
					/>
				)}
				ItemSeparatorComponent={ListItemSeperator}
				refreshing={refreshing}
				onRefresh={() => {
					setMessages([
						{
							id: 6,
							title: "Refreshed",
							description: "Refreshed Volahh",
							image: require("../assets/nuran.jpg"),
						},
					]);
				}}
			/>
		</CrossScreen>
	);
}

const styles = StyleSheet.create({});

export default MessagesScreen;
