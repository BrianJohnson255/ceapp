import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Home extends Component {
	render() {
		return (
			<View style={{ flex: 1, flexDirection: 'column', alignItems: 'stretch', justifyContent: 'center',}}>
				<View style={{ ...styles.item, backgroundColor: 'skyblue' }}>
					<Text style={ styles.itemText }>Calendar</Text>
				</View>
				
				<View style={{ ...styles.item, backgroundColor: 'indianred' }}>
					<Text style={ styles.itemText }>Active Productions</Text>
				</View>
				
				<View style={{ ...styles.item, backgroundColor: 'darkseagreen' }}>
					<Text style={ styles.itemText }>Find Directors</Text>
				</View>
				
				<View style={{ ...styles.item, backgroundColor: 'mediumpurple' }}>
					<Text style={ styles.itemText }>Find Crew</Text>
				</View>
				
				<View style={{ ...styles.item, backgroundColor: 'gold' }}>
					<Text style={ styles.itemText }>Create Production</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	item: {
		width: '100%',
		height: '20%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	itemText: {
		color: 'white',
		fontSize: 30,
	},
});
