import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {
	ScrollView,
	TextInput,
	TouchableOpacity,
} from 'react-native';

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
				// show error...
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
					onSubmitEditing={() => { this.pw.focus(); }}
					onChangeText={email => this.setState(prev => ({ user: { ...prev.user, email } }))}
					maxLength={30}
				/>
				</View>
				<View style={styles.inputContainer}>
				<TextInput
					ref={(input) => { this.pw = input; }}
					style={styles.textInput}
					placeholder="Password"
					secureTextEntry={true}
					onChangeText={password => this.setState(prev => ({ user: { ...prev.user, password } }))}
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
		borderColor: '#007BFF',
		backgroundColor: '#007BFF',
		padding: 15,
		margin: 5,
	},
	saveButtonText: {
		color: '#FFFFFF',
		fontSize: 20,
		textAlign: 'center',
	},
});
