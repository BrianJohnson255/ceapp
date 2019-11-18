import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Appbar, Button, TextInput } from 'react-native-paper';

export default class CreateProduction extends Component {
	render() {
		const { goBack } = this.props.navigation;
		const { navigate } = this.props.navigation;
		
		return (
		
			<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
				<View>
					<Appbar.Header>
						<Appbar.BackAction onPress={() => goBack()} />
						<Appbar.Content title="Create Production" />
						<Appbar.Action icon="account" onPress={() => navigate('UserInfo')} />
					</Appbar.Header>
					<View style={{padding: 20, top: 80}}>
						<TextInput style={{paddingBottom: 20}}mode='outlined' label='Production Name' />
						<TextInput style={{paddingBottom: 20}} mode='outlined' label='Description' multiline={true} />
						<Button style={{height: 50, justifyContent: 'center'}}  mode="contained"><Text>Create Production</Text></Button>
					</View>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}