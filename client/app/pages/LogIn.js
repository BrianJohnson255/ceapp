import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {
	ScrollView,
	TextInput,
	TouchableOpacity,
} from 'react-native';

export default class SignUpPage extends React.Component {
	render() {
		const { navigate } = this.props.navigation;
	
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
					maxLength={30}
				/>
				</View>
				<View style={styles.inputContainer}>
				<TextInput
					ref={(input) => { this.pw = input; }}
					style={styles.textInput}
					placeholder="Password"
					secureTextEntry={true}
					maxLength={30}
				/>
				</View>
				<View style={styles.inputContainer}>
					<TouchableOpacity
						style={styles.saveButton}
						onPress={() => navigate('Home')}
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
