import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import UserListRow from './UserListRow.js';

const UserList = ({ itemList }) => (
	<View>
		<FlatList
				data={itemList}
				renderItem={({ item }) => <UserListRow user={item} />}
				keyExtractor={item => item.id}
			/>

	</View>
);

export default UserList;