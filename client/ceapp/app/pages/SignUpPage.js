import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {
	ScrollView,
	TextInput,
	TouchableOpacity,
} from 'react-native';

import { createUser } from '../api/user';

export default class SignUpPage extends React.Component {
	constructor(params) {
		super(params)

		this.state = {
			user: {
				firstName: '',
				lastName: '',
				email: '',
				password: '',
			},
		};
	}

	submitForm() {
		// TODO: validate...
		createUser(this.state.user);
	}

	render() {
		return (
			<View style={styles.container}>
				<View>
					<Text style={styles.header}>Sign Up</Text>
				</View>

				<View style={styles.inputContainer}>
					<TextInput
						style={styles.textInput}
						placeholder="First Name"
						maxLength={20}
						onChangeText={firstName => this.setState((prev) => ({ user: { ...prev.user, firstName } }))}
					/>
				</View>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.textInput}
						placeholder="Last Name"
						maxLength={20}
						onChangeText={lastName => this.setState((prev) => ({ user: { ...prev.user, lastName } }))}
					/>
				</View>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.textInput}
						placeholder="Email Address"
						maxLength={20}
						onChangeText={email => this.setState((prev) => ({ user: { ...prev.user, email } }))}
					/>
				</View>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.textInput}
						placeholder="Password"
						maxLength={20}
						secureTextEntry={true}
						onChangeText={password => this.setState((prev) => ({ user: { ...prev.user, password } }))}
					/>
				</View>
				<View style={styles.inputContainer}>
					<Button title="Submit" onPress={this.submitForm.bind(this)} />
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
		justifyContent: 'center',
		alignItems: 'center',
	},
	textInput: {
		height: 50,
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
