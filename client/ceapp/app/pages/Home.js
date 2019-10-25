import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Home extends Component {
	render() {
		return (
			<View style={{ flex: 1, flexDirection: 'column', alignItems: 'stretch', justifyContent: 'center',}}>
				<View style={{ width: '100%', height: '20%', backgroundColor: 'skyblue', justifyContent: 'center', alignItems: 'center' }}>
					<Text style={{ color: 'white', fontSize: 30 }}>Calendar</Text>
				</View>
				
				<View style={{ width: '100%', height: '20%', backgroundColor: 'indianred', justifyContent: 'center', alignItems: 'center' }}>
					<Text style={{ color: 'white', fontSize: 30 }}>Active Productions</Text>
				</View>
				
				<View style={{ width: '100%', height: '20%', backgroundColor: 'darkseagreen', justifyContent: 'center', alignItems: 'center' }}>
					<Text style={{ color: 'white', fontSize: 30 }}>Find Directors</Text>
				</View>
				
				<View style={{ width: '100%', height: '20%', backgroundColor: 'mediumpurple', justifyContent: 'center', alignItems: 'center' }}>
					<Text style={{ color: 'white', fontSize: 30 }}>Find Crew</Text>
				</View>
				
				<View style={{ width: '100%', height: '20%', backgroundColor: 'gold', justifyContent: 'center', alignItems: 'center' }}>
					<Text style={{ color: 'white', fontSize: 30 }}>Create Production</Text>
				</View>
			</View>
		);
	}
}
