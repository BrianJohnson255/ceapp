import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {
	ScrollView,
	TextInput,
	TouchableOpacity,
} from 'react-native';

export default class SignUpPage extends React.Component {
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
					/>
				</View>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.textInput}
						placeholder="Last Name"
						maxLength={20}
					/>
				</View>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.textInput}
						placeholder="Email Address"
						maxLength={20}
					/>
				</View>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.textInput}
						placeholder="Password"
						maxLength={20}
					/>
				</View>
				<View style={styles.inputContainer}>
					<TouchableOpacity style={styles.saveButton}>
						<Text style={styles.saveButtonText}>Save</Text>
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
		fontWeight: 'bold'
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
		margin: 5
	},
	saveButtonText: {
		color: '#FFFFFF',
		fontSize: 20,
		textAlign: 'center'
	},
});
