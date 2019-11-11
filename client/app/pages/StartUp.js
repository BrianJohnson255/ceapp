import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import { isLoggedIn } from '../api/user';

export default class StartUp extends Component {
	componentDidMount() {
		isLoggedIn().then(stat => {
			if (stat) {
				this.props.navigation.navigate('Home');
			}
		});
	}

	render() {
		const { navigate } = this.props.navigation;
		
		return (
			<View style={{ flex: 1, flexDirection: 'column', alignItems: 'stretch', justifyContent: 'center',}}>
				<View style={{ ...styles.item, height: '40%', backgroundColor: 'skyblue' }}>
					<Text style={ styles.itemName }>CEA</Text>
				</View>
				
				<TouchableHighlight style={{ ...styles.item, height: '30%', backgroundColor: 'darkseagreen' }} onPress={() => navigate('LogIn')}>
					<Text style={ styles.itemText }>Log In</Text>
				</TouchableHighlight>
				
				<TouchableHighlight style={{ ...styles.item, height: '20%', backgroundColor: 'mediumpurple' }} onPress={() => navigate('SignUpPage')}>
					<Text style={ styles.itemText }>Sign Up</Text>
				</TouchableHighlight>
				
				<View style={{ ...styles.item, height: '10%', backgroundColor: 'gold' }}>
					<Text style={ styles.itemText }>Help</Text>
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
		color: 'white',
		fontSize: 30,
    },
    itemName: {
        color: 'black',
        fontSize: 128,
    }
});
