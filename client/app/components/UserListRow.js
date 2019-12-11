import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-paper';

const UserListRow = ({ user }) => (
	<View style = {{flex: 1, padding: 10, width: '100%'}}>
		<Card style={{backgroundColor: '#F6F6F6'}}>
			<Card.Content>
				<Text style={{fontSize: 24}}>{user.firstName + " " + user.lastName + " (" + user.skill + ")"}</Text>
				<Text>{user.email}</Text>
			</Card.Content>
		</Card>

	</View>
);

export default UserListRow;
