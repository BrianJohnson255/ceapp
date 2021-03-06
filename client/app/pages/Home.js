import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar,  TouchableWithoutFeedback } from 'react-native';
import { Appbar, Button, Card, Surface, Title } from 'react-native-paper';

export default class Home extends Component {
	render() {
		const { navigate } = this.props.navigation;
		
		return (
			<View style={{flex: 1}}>
			<StatusBar barStyle="light-content" />
				<View style={{flex: 1}}>
					<Appbar.Header>
						<Appbar.Content title="Home" />
						<Appbar.Action icon="account" onPress={() => navigate('UserInfo')} />
					</Appbar.Header>
					<ScrollView style={{flex: 1}}>
						<TouchableWithoutFeedback onPress={() => navigate('Production')}>
							<Card style={{padding: 10}} elevation={9}>
								{/*<Card.Cover source={{ uri: '/assests/img/ProductionImg.jpg' }} />*/}
								<Card.Cover source={require('../../assets/img/ProductionImg.jpg')} />
								<Card.Title title="Active Productions" subtitle="Find a production for you" />
							</Card>
						
						</TouchableWithoutFeedback>
						
						<TouchableWithoutFeedback>
							<Card style={{padding: 10}} elevation={9} onPress={() => navigate('PeopleSearch')}>
								<Card.Cover source={require('../../assets/img/FilmAndCrew.jpg')} />
								<Card.Title title="Find Directors / Crew" subtitle="Be a part of a top-notch crew" />
							</Card>
						</TouchableWithoutFeedback>
						
						<TouchableWithoutFeedback onPress={() => navigate('CreateProduction')}>
							<Card style={{padding: 10}} elevation={9}>
								<Card.Cover source={require('../../assets/img/CreateProduction.jpeg')} />
								<Card.Title title="Create Production" subtitle="Create a production for potential crew members to find" />
							</Card>
						</TouchableWithoutFeedback>
					</ScrollView>
				</View>
			</View>
		);
	}
}