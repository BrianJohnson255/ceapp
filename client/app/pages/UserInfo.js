import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Keyboard, TouchableWithoutFeedback, Image } from 'react-native';
import { Appbar, Button, TextInput } from 'react-native-paper';

export default class UserInfo extends Component {
	render() {
		const { goBack } = this.props.navigation;
		
		return (
			<View>
				<Appbar style={{top: 0, height: 70}}>
					<Appbar.BackAction onPress={() => goBack()} />
					<Appbar.Content title="Profile" />
				</Appbar>
				<Image style={{}}source={require('./CEALogo.png')}/>
			</View>
		);
	}
}