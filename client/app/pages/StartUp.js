import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image} from 'react-native';
import {Button} from 'react-native-paper'

export default class StartUp extends Component {
	render() {
		const { navigate } = this.props.navigation;
		
		return (
			<View style={{flex: 1, flexDirection: 'column', ...styles.item, height: '100%', backgroundColor: 'white' }}>
				<Text>{`\n\n`}</Text>
				<Image style={{}}source={require('./CEALogo.png')}/>
				<Text>{'\n\n\n'}</Text>
				<Button style={{ ...styles.button}} mode="contained" color="#260859" onPress={() => navigate('LogIn')}>Log In</Button>
				<Text>{`\n`}</Text>
				<Button style={{ ...styles.button}} mode="contained" color="#260859" onPress={() => navigate('SignUpPage')}>Sign up</Button>
				<Text>{`\n`}</Text>
				<Button style={{ ...styles.button}} mode="contained" color="#260859" onPress={() => navigate('SignUpPage')}>Help</Button>

			</View>	
		);
	}
}

const styles = StyleSheet.create({
	item: {
		width: '100%',
		alignItems: 'center',
	},
	button: {
		width: '50%',
			
	}
});
