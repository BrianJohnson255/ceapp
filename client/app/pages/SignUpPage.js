import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Keyboard, TouchableWithoutFeedback} from 'react-native';
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
			<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
				<View style={styles.container}>
					<View>
						<Text style={styles.header}>Sign Up</Text>
					</View>

					<View style={styles.inputContainer}>
						<TextInput
							style={styles.textInput}
							placeholder="First Name"
							textContentType="givenName"
							maxLength={30}
							onChangeText={firstName => this.setState((prev) => ({ user: { ...prev.user, firstName } }))}
							onSubmitEditing={() => { this.lastNameInput.focus(); }}
						/>
					</View>
					<View style={styles.inputContainer}>
						<TextInput
							ref={(input) => { this.lastNameInput = input; }}
							style={styles.textInput}
							placeholder="Last Name"
							textContentType="familyName"
							maxLength={30}
							onChangeText={lastName => this.setState((prev) => ({ user: { ...prev.user, lastName } }))}
							onSubmitEditing={() => { this.emailInput.focus(); }}
						/>
					</View>
					<View style={styles.inputContainer}>
						<TextInput
							ref={(input) => { this.emailInput = input; }}
							style={styles.textInput}
							placeholder="Email Address"
							textContentType="emailAddress"
							autoCapitalize="none"
							maxLength={50}
							onChangeText={email => this.setState((prev) => ({ user: { ...prev.user, email } }))}
							onSubmitEditing={() => { this.passwordInput.focus(); }}
						/>
					</View>
					<View style={styles.inputContainer}>
						<TextInput
							ref={(input) => { this.passwordInput = input; }}
							style={styles.textInput}
							placeholder="Password"
							textContentType="password"
							maxLength={50}
							secureTextEntry={true}
							onChangeText={password => this.setState((prev) => ({ user: { ...prev.user, password } }))}
						/>
					</View>
					<View style={styles.inputContainer}>
						<TouchableOpacity style={styles.submit} onPress={this.submitForm.bind(this)}>
							<Text style={styles.submitText}>Sign Up</Text>
						</TouchableOpacity>
					</View>
				</View>
			</TouchableWithoutFeedback>
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
		height: 25,
		fontSize: 25,
		color: 'black',
		justifyContent: 'center',
		alignItems: 'center',
	},
	submit: {
		borderWidth: 1,
		borderColor:'#007BFF',
		backgroundColor: '#007BFF',
		padding: 15,
		margin: 5,
	},
	submitText: {
		color: '#FFFFFF',
		fontSize: 20,
		textAlign: 'center',
	},
});
