import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Keyboard, TouchableWithoutFeedback, Image } from 'react-native';
import { Appbar, Button, TextInput } from 'react-native-paper';
import { switchScreen } from '../util';
import { logout } from '../api/user';

export default class UserInfo extends Component {
	render() {
		const { goBack } = this.props.navigation;
		const { navigate } = this.props.navigation;
		
		return (
			<View>
				<Appbar.Header>
					<Appbar.BackAction onPress={() => goBack()} />
					<Appbar.Content title="Profile" />
				</Appbar.Header>
				<ScrollView contentInset={{bottom: 150}}>
			
				<Image style={{...styles.item}}source={require('./CEALogo.png')}/>
				
				<View >
				<Paragraph style ={{...styles.paragraph}}>Name: </Paragraph>
				<Paragraph style ={{...styles.paragraph}}>Email: </Paragraph>
				<Paragraph style ={{...styles.paragraph}}>Phone Number: </Paragraph>
				<Paragraph style ={{...styles.paragraph}}>Productions: </Paragraph>
				<Paragraph style ={{...styles.paragraph}}>Skills: </Paragraph>
				</View>
				</ScrollView>
				<Image style={{}}source={require('./CEALogo.png')}/>
				<Text>{`\n`}</Text>
				<View style={{ ...styles.item,  backgroundColor: 'white' }}>
					<Button style={{ ...styles.button}} mode="contained" color="#260859" onPress={() => {logout(); navigate('StartUp')}}>Log Out</Button>
				</View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	item: {
		width: '100%',
		alignItems: 'center',
		 
	},

	paragraph: {
		fontSize: 25,
		color: '#260859',
		justifyContent: 'left',
		height: '10%',
	
	},
	button: {
		width: '50%',
			
	},
});
