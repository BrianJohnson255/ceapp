import React, { Component } from 'react';
import { StyleSheet, Text, View, Keyboard, TouchableWithoutFeedback, StatusBar } from 'react-native';
import { Appbar, Button, TextInput, Searchbar, Chip } from 'react-native-paper';
import { Alert, ScrollView, TouchableOpacity, } from 'react-native';
import UserList from '../components/UserList.js';
import UserListRow from '../components/UserListRow.js';

export default class PeopleSearch extends React.Component {
	constructor(params) {
		super(params)
		
		this.state = {
			users: [
				{
					firstName: "Bill",
					lastName: "Bill",
					email: "billbill@bill.bill",
					skill: "Camera",
					id: "1",
				},
				{
					firstName: "Brian",
					lastName: "Johnson",
					email: "btjohnson@mail.lipscomb.edu",
					skill: "Camera",
					id: "2",
				},
				{
					firstName: "John",
					lastName: "McSprinkles",
					email: "jamcsprinkles@mail.lipscomb.edu",
					skill: "Costuming",
					id: "3",
				}
			],
			
			queriedUsers: [],
			
			currentQuery: "",
			
			selectionTable: [false, false, false],
			backgroundTable: ["#F6F6F6", "#F6F6F6", "#F6F6F6"],
		};
		
		var i;
		for (i = 0; i < this.state.users.length; i++) {
			this.state.queriedUsers.push(this.state.users[i]);
		}
	}
	
	userSearch(query) {
		newQueriedUsers = [];
		
		this.state.currentQuery = query;
		
		var i;
		for (i = 0; i < this.state.users.length; i++) {
			if (this.state.users[i].firstName.search(query) != -1 || this.state.users[i].lastName.search(query) != -1) {
				
				if (this.state.selectionTable[0] == true && this.state.users[i].skill == "Editor") {
					newQueriedUsers.push(this.state.users[i]);
				}
				
				else if (this.state.selectionTable[1] == true && this.state.users[i].skill == "Camera") {
					newQueriedUsers.push(this.state.users[i]);
				}
				
				else if (this.state.selectionTable[2] == true && this.state.users[i].skill == "Costuming") {
					newQueriedUsers.push(this.state.users[i]);
				}
				
				else if (this.state.selectionTable[0] == false && this.state.selectionTable[1] == false && this.state.selectionTable[2] == false)
				{
					newQueriedUsers.push(this.state.users[i]);
				}
			}
		}
		
		this.setState({ queriedUsers: newQueriedUsers});
	}
	
	rolePush(role) {
		newSelectionTable = this.state.selectionTable;
		newBackgroundTable = this.state.backgroundTable;
		
		if (newSelectionTable[role] == false) {
			newSelectionTable[role] = true;
			newBackgroundTable[role] = "#E1E1E1";
		}
		
		else {
			newSelectionTable[role] = false;
			newBackgroundTable[role] = "#F6F6F6";
		}
		
		this.setState({selectionTable: newSelectionTable, backgroundTable: newBackgroundTable});
		
		this.userSearch(this.state.currentQuery);
	}
	
	render() {
		const { goBack } = this.props.navigation;
		const { navigate } = this.props.navigation;
		
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
						<Searchbar placeholder="Search" onChangeText={query => { this.userSearch(query) }} />
					</View>
					<View style={{padding: 10}}>
						<ScrollView horizontal={true}>
							<Chip style={{backgroundColor: this.state.backgroundTable[0], width: 90, alignItems: "center", marginLeft: 10}} 
							mode="outlined" onPress={() => { this.rolePush(0) }} selected={this.state.selectionTable[0]}>Editor</Chip>
							
							<Chip style={{backgroundColor: this.state.backgroundTable[1], width: 90, alignItems: "center", marginLeft: 10}} 
							mode="outlined" onPress={() => { this.rolePush(1) }} selected={this.state.selectionTable[1]}>Camera</Chip>
							
							<Chip style={{backgroundColor: this.state.backgroundTable[2], width: 110, alignItems: "center", marginLeft: 10}} 
							mode="outlined" onPress={() => { this.rolePush(2) }} selected={this.state.selectionTable[2]}>Costuming</Chip>
						</ScrollView>
					</View>
					<View style={styles.item}>
						<UserList
							itemList={this.state.queriedUsers}
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