import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Keyboard, TouchableWithoutFeedback, Image } from 'react-native';
import { Appbar, Button, TextInput } from 'react-native-paper';

export default class UserInfo extends Component {
	render() {
		const { goBack } = this.props.navigation;
		
		return (
			<View>
				<Appbar.Header>
					<Appbar.BackAction onPress={() => goBack()} />
					<Appbar.Content title="Profile" />
				</Appbar.Header>
				<Image style={{}}source={require('./CEALogo.png')}/>
			</View>
		);
	}
}