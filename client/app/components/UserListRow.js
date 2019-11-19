import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const UserListRow = ({ user }) => (
	<View style = {{width: 400, height: 125}}>
		<View>
			<Text>
				{user.firstName}
			</Text>
			<Text>
				{user.lastName}
			</Text>
			<Text>
				{user.email}
			</Text>
		</View>

	</View>
);

export default UserListRow;
