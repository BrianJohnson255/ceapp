import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, ScrollView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Appbar, Button, TextInput } from 'react-native-paper';

import R from 'ramda';

import { createProject } from '../api/project';

export default class CreateProduction extends Component {
	constructor(params) {
		super(params);

		this.state = {
			project: {
				title: '',
				description: '',
			},
		};
	}

	async submitForm() {
		const res = await createProject(this.state.project);
		if (res.status === 200) {
			// this.props.navigation.navigate('Home');
			console.log('nice ;)');
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
		const { navigate } = this.props.navigation;
		
		return (
			<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
				<View>
					<Appbar.Header>
						<Appbar.BackAction onPress={() => goBack()} />
						<Appbar.Content title="Create Production" />
						<Appbar.Action icon="account" onPress={() => navigate('UserInfo')} />
					</Appbar.Header>
					<View style={{padding: 20, top: 80}}>
						<TextInput
							style={{paddingBottom: 20}}
							mode='outlined'
							label='Production Name'
							onChangeText={text => this.setState(R.assocPath(['project', 'title'], text))}
						/>
						<TextInput
							style={{paddingBottom: 20}}
							mode='outlined'
							label='Description'
							multiline={true}
							onChangeText={text => this.setState(R.assocPath(['project', 'description'], text))}
						/>
						<Button
							style={{height: 50, justifyContent: 'center'}}
							mode="contained"
							onPress={this.submitForm.bind(this)}
						>
							<Text>Create Production</Text>
						</Button>
					</View>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}
