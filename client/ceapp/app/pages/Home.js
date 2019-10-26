import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Home extends Component {
	render() {
		return (
			<View style={{ flex: 1, flexDirection: 'column', alignItems: 'stretch', justifyContent: 'center'}}>
				<View style={{ width: '100%', height: '20%', backgroundColor: 'skyblue' }}>
				</View>
				<View style={{ width: '100%', height: '20%', backgroundColor: 'indianred' }}>
					<Text>1234huhyaaaaay huh????? plz work 2.0</Text>
				</View>
				<View style={{ width: '100%', height: '20%', backgroundColor: 'darkseagreen' }} />
				<View style={{ width: '100%', height: '20%', backgroundColor: 'mediumpurple' }} />
				<View style={{ width: '100%', height: '20%', backgroundColor: 'gold' }} />
			</View>
		);
	}
}
