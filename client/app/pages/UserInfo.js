import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Keyboard, TouchableWithoutFeedback, Image } from 'react-native';
import { Appbar, Button, TextInput, Paragraph } from 'react-native-paper';

import { logout } from '../api/user';

export default class UserInfo extends Component {
	render() {
		const { goBack } = this.props.navigation;
		const { navigate } = this.props.navigation;
		
		return (
			<View>
				<View>
				<Appbar.Header>
					<Appbar.BackAction onPress={() => goBack()} />
					<Appbar.Content title="Profile" />
				</Appbar.Header>
				<Image style={{display: 'flex', justifyContent: 'center',flexDirection: 'row'}}source={require('./CEALogo.png')}/>

				<ScrollView >
			
				
				<Paragraph style = {{...styles.p}}>Name: </Paragraph>
				<Paragraph></Paragraph>
				<Paragraph style = {{...styles.p}}>Email: </Paragraph>
				<Paragraph></Paragraph>
				<Paragraph style = {{...styles.p}}>Phone Number: </Paragraph>
				<Paragraph></Paragraph>
				<Paragraph style = {{...styles.p}}>Productions: </Paragraph>
				<Paragraph></Paragraph>
				<Paragraph style = {{...styles.p}}>Skills: </Paragraph>
				<Paragraph></Paragraph>
				<View style = {{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
				<Button style={{ ...styles.button }} mode="contained" color="#260859" onPress={() => {logout(); navigate('StartUp')}}>Log Out</Button>
				</View>
				</ScrollView>
				</View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	item: {
		alignItems: 'center',
		 
	},

	p: {
		fontSize: 25,
		color: '#260859',
		alignItems: 'left',
		paddingTop: "5%",
		paddingLeft: "5%",
	},
	button: {
		width: '60%',
	},
});
