import React, { Component } from 'react';
import { StyleSheet, Text, View, Keyboard, StatusBar } from 'react-native';
import { Appbar, Button, TextInput } from 'react-native-paper';
import {
	Alert,
	ScrollView,
	TouchableOpacity,
	TouchableWithoutFeedback
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
						<Text style={styles.header}>Log In</Text>
					</View>
				
					<View style={styles.inputContainer}>
					<TextInput
						mode="outlined"
						label="Email Address"
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
						mode="outlined"
						label="Password"
						ref={input => this.pw = input}
						placeholder="Password"
						secureTextEntry={true}
						onChangeText={text => this.setState(R.assocPath(['user', 'password'], text))}
						maxLength={30}
					/>
					</View>
					<View style={styles.inputContainer}>
						<Button
							style={styles.saveButton}
							onPress={this.submitForm.bind(this)}
						>
							<Text style={styles.saveButtonText}>Log In</Text>
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
		padding: 15,
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
