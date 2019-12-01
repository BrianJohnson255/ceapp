import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import UserListRow from './UserListRow.js';

const UserList = ({ itemList }) => (
	<View>
		<FlatList style={{width: '100%'}}
				data={itemList}
				renderItem={({ item }) => <UserListRow user={item} />}
				keyExtractor={item => item.id}
			/>

	</View>
);

export default UserList;