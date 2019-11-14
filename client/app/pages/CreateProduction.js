import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Appbar, TextInput } from 'react-native-paper';

export default class CreateProduction extends Component {
	render() {
		const { goBack } = this.props.navigation;
		
		return (
			<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
				<View>
					<Appbar style={{left: 0, right: 0, top: 0}}>
						<Appbar.BackAction onPress={() => goBack()} />
						<Appbar.Content title="Create Production" />
					</Appbar>
					<View style={{padding: 20}}>
						<TextInput mode='outlined' label='Production Name' />
						<TextInput mode='outlined' label='Description' multiline={true} />
						
					</View>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}