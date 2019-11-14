import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Appbar, Button, Card, Surface, Title } from 'react-native-paper';

export default class Home extends Component {
	render() {
		const { navigate } = this.props.navigation;
		
		return (
			//<View>
				/*<Appbar style={{position: 'absolute', left: 0, right: 0, top: 0}}>
					<Appbar.Content title="Home" />
				</Appbar>*/
				<ScrollView style={{top: 55}}>
					<TouchableWithoutFeedback onPress={() => navigate('Calendar')}>
						<Card style={{padding: 10}} elevation={9}>
							<Card.Cover source={{ uri: 'https://picsum.photos/400' }} />
							<Card.Title title="Calendar" subtitle="See a calendar with all productions" />
						</Card>
					</TouchableWithoutFeedback>
				
					<TouchableWithoutFeedback onPress={() => navigate('Production')}>
						<Card style={{padding: 10}} elevation={9}>
							<Card.Cover source={{ uri: 'https://picsum.photos/400' }} />
							<Card.Title title="Active Productions" subtitle="Find a production for you" />
						</Card>
					
					</TouchableWithoutFeedback>
					
					<TouchableWithoutFeedback>
						<Card style={{padding: 10}} elevation={9}>
							<Card.Cover source={{ uri: 'https://picsum.photos/400' }} />
							<Card.Title title="Find Directors" subtitle="Find a director you want to work with" />
						</Card>
					</TouchableWithoutFeedback>
					
					<TouchableWithoutFeedback>
						<Card style={{padding: 10}} elevation={9}>
							<Card.Cover source={{ uri: 'https://picsum.photos/400' }} />
							<Card.Title title="Find Crew" subtitle="Get a top-notch crew for your film" />
						</Card>
					</TouchableWithoutFeedback>
					
					<TouchableWithoutFeedback onPress={() => navigate('CreateProduction')}>
						<Card style={{padding: 10}} elevation={9}>
							<Card.Cover source={{ uri: 'https://picsum.photos/400' }} />
							<Card.Title title="Create Production" subtitle="Create a production for potential crew members to find" />
						</Card>
					</TouchableWithoutFeedback>
				</ScrollView>
			//</View>
		);
	}
}