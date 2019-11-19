import React, { Component } from 'react';
import { StyleSheet, Text, View, Keyboard, TouchableWithoutFeedback, StatusBar } from 'react-native';
import { Appbar, Button, TextInput, Searchbar } from 'react-native-paper';
import { Alert, ScrollView, TouchableOpacity, } from 'react-native';
import UserList from '../components/UserList.js';
import UserListRow from '../components/UserListRow.js';

export default class PeopleSearch extends React.Component {
	constructor(params) {
		super(params)
		
		this.state = {
			newQuery: '',
			users: [
				{
					firstName: "Bill",
					lastName: "Bill",
					email: "billbill@bill.bill",
					id: "1",
				}
			],
		};
	}
	
	render() {
		const { goBack } = this.props.navigation;
		const { navigate } = this.props.navigation;
		const { newQuery } = this.state;
		
		return (
			<View>
			<StatusBar barStyle="light-content" />
				<View>
					<Appbar.Header>
						<Appbar.BackAction onPress={() => goBack()} />
						<Appbar.Content title="Search Crew" />
						<Appbar.Action icon="account" onPress={() => navigate('UserInfo')} />
					</Appbar.Header>
					<View style={{padding: 10}}>
						<Searchbar placeholder="Search" onChangeText={query => { this.setState({ newQuery: query}); }} value={newQuery} />
					</View>
					<View style={styles.item}>
						<UserList
							itemList={this.state.users}
						/>
					</View>
				</View>
			</View>
		);
		
	}
}

const styles = StyleSheet.create({
	item: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	itemText: {
		color: 'black',
		fontSize: 30,
	}
});