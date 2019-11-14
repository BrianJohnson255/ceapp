import React, { Component } from 'react';
import { StyleSheet, Text, View, Keyboard, TouchableWithoutFeedback, StatusBar } from 'react-native';
import { Appbar, Button, TextInput } from 'react-native-paper';
import {
	Alert,
	ScrollView,
	TouchableOpacity,
} from 'react-native';

import R from 'ramda';

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

	async submitForm() {
		const res = await createUser(this.state.user);
		if (res.status === 200) {
			this.props.navigation.navigate('Home');
		} else {
			const msg = R.compose(
				R.join('\n'),
				R.map(([key, errs]) => `${key} ${errs[0]}`),
				R.toPairs,
			)(res.data.errors);

			Alert.alert('Errors', msg);
		}
	}

	render() {
		const { goBack } = this.props.navigation;
		
		return (
			<View>
			<StatusBar barStyle="light-content" />
			<View>
			<Appbar style={{top: 0}}>
			<Appbar.BackAction onPress={() => goBack()} />
			</Appbar>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
				<View style={styles.container}>
					<View>
						<Text style={styles.header}>Sign Up</Text>
					</View>

					<View style={styles.inputContainer}>
						<TextInput
							mode="outlined"
							label="First Name"
							placeholder="First Name"
							textContentType="givenName"
							maxLength={30}
							onChangeText={text => this.setState(R.assocPath(['user', 'firstName'], text))}
							onSubmitEditing={() => this.lastNameInput.focus()}
						/>
					</View>
					<View style={styles.inputContainer}>
						<TextInput
							mode="outlined"
							label="Last Name"
							ref={input => this.lastNameInput = input}
							placeholder="Last Name"
							textContentType="familyName"
							maxLength={30}
							onChangeText={text => this.setState(R.assocPath(['user', 'lastName'], text))}
							onSubmitEditing={() => this.emailInput.focus()}
						/>
					</View>
					<View style={styles.inputContainer}>
						<TextInput
							mode="outlined"
							label="Email Address"
							ref={input => this.emailInput = input}
							placeholder="Email Address"
							textContentType="emailAddress"
							autoCapitalize="none"
							maxLength={50}
							onChangeText={text => this.setState(R.assocPath(['user', 'email'], text))}
							onSubmitEditing={() => this.passwordInput.focus()}
						/>
					</View>
					<View style={styles.inputContainer}>
						<TextInput
							mode="outlined"
							label="Password"
							ref={input => this.passwordInput = input}
							placeholder="Password"
							textContentType="password"
							maxLength={50}
							secureTextEntry={true}
							onChangeText={text => this.setState(R.assocPath(['user', 'password'], text))}
							onSubmitEditing={this.submitForm.bind(this)}
						/>
					</View>
					<View style={styles.inputContainer}>
						<Button style={styles.submit} onPress={this.submitForm.bind(this)}>
							<Text style={styles.submitText}>Sign Up</Text>
						</Button>
					</View>
				</View>
			</TouchableWithoutFeedback>
			</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 45,
		backgroundColor: '#FFFFFF',
	},
	header: {
		fontSize: 60,
		textAlign: 'center',
		margin: 10,
		fontWeight: 'bold',
	},
	inputContainer: {
		//borderColor: '#CCCCCC',
		//borderTopWidth: 1,
		//borderBottomWidth: 1,
		paddingLeft: 15,
		paddingRight: 15,
		paddingTop: 10,
		paddingBottom: 10,
		//justifyContent: 'center',
		//alignItems: 'center',
	},
	textInput: {
		//height: 25,
		//fontSize: 25,
		color: 'black',
		justifyContent: 'center',
		alignItems: 'center',
	},
	submit: {
		borderWidth: 1,
		borderColor:'#260859',
		backgroundColor: '#260859',
		padding: 15,
		margin: 5,
	},
	submitText: {
		color: '#FFFFFF',
		fontSize: 20,
		textAlign: 'center',
	},
});
