import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';

export default class Test extends Component {
	render() {
		
		const { goBack } = this.props.navigation;
		const { navigate } = this.props.navigation;
		
		return (
			<View>
				<Appbar.Header>
					<Appbar.BackAction onPress={() => goBack()} />
					<Appbar.Content title="Calendar" />
					<Appbar.Action icon="account" onPress={() => navigate('UserInfo')} />
				</Appbar.Header>
				<View style={{flex: 1, justifyContent: 'center'}}>
					<Text>heyo again</Text>
				</View>
			</View>
		)
	}
}