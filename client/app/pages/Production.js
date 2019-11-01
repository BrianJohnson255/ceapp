import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class Home extends Component {
	render() {
		const { navigate } = this.props.navigation;
		
		return (
			<View style={{ flex: 1, flexDirection: 'column', alignItems: 'stretch', justifyContent: 'center'}}>
				<TouchableHighlight style={{ ...styles.item, backgroundColor: 'skyblue' }} onPress={() => navigate('Calendar')}>
					<Text style={ styles.itemText }>Production</Text>
				</TouchableHighlight>
				<View style={{ ...styles.item, backgroundColor: 'indianred' }}>
					<Text style={ styles.itemText }>Active Productions</Text>
				</View>
				
				<View style={{ ...styles.item, backgroundColor: 'darkseagreen' }}>
					<Text style={ styles.itemText }>FiProductiontors</Text>
				</View>
				
				<View style={{ ...styles.item, backgroundColor: 'mediumpurple' }}>
					<Text style={ styles.itemText }>FiProduction</Text>
				</View>
				
				<View style={{ ...styles.item, backgroundColor: 'gold' }}>
					<Text style={ styles.itemText }>CreaProduction</Text>
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
