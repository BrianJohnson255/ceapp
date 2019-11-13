import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {
	Alert,
	ScrollView,
	TextInput,
	TouchableOpacity,
} from 'react-native';

import R from 'ramda';

import { login } from '../api/user';

export default class SignUpPage extends React.Component {
	constructor(params) {
		super(params)

		this.state = {
			user: {
				email: '',
				password: '',
			},
		};
	}

	submitForm() {
		login(this.state.user).then(res => {
			if (res.status === 200) {
				const { navigate } = this.props.navigation;
				navigate('Home');
			} else {
				Alert.alert('Error', res.data.msg);
			}
		});
	}

	render() {
	
		return (
			<View style={styles.container}>
				<View>
					<Text style={styles.header}>Log In</Text>
				</View>
			
				<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInput}
					autoCapitalize="none"
					textContentType="emailAddress"
					placeholder="Email Address"
					onSubmitEditing={() => this.pw.focus()}
					onChangeText={text => this.setState(R.assocPath(['user', 'email'], text))}
					maxLength={30}
				/>
				</View>
				<View style={styles.inputContainer}>
				<TextInput
					ref={input => this.pw = input}
					style={styles.textInput}
					placeholder="Password"
					secureTextEntry={true}
					onChangeText={text => this.setState(R.assocPath(['user', 'password'], text))}
					onSubmitEditing={this.submitForm.bind(this)}
					maxLength={30}
				/>
				</View>
				<View style={styles.inputContainer}>
					<TouchableOpacity
						style={styles.saveButton}
						onPress={this.submitForm.bind(this)}
					>
						<Text style={styles.saveButtonText}>Log In</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 45,
		backgroundColor: '#F5FCFF',
	},
	header: {
		fontSize: 60,
		textAlign: 'center',
		margin: 10,
		fontWeight: 'bold',
	},
	inputContainer: {
		borderColor: '#CCCCCC',
		borderTopWidth: 1,
		borderBottomWidth: 1,
		paddingTop: 15,
		paddingBottom: 15,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textInput: {
		height: 30,
		fontSize: 30,
		color: 'black',
		justifyContent: 'center',
		alignItems: 'center',
	},
	saveButton: {
		borderWidth: 1,
		borderColor: '#260859',
		backgroundColor: '#260859',
		padding: 15,
		margin: 5,
	},
	saveButtonText: {
		color: '#FFFFFF',
		fontSize: 20,
		textAlign: 'center',
	},
});
