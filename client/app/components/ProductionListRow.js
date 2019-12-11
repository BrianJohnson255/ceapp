import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-paper';

const ProductionListRow = ({ production }) => (
	<View style = {{flex: 1, padding: 10, width: '100%'}}>
		<Card style={{backgroundColor: '#F6F6F6'}}>
			<Card.Cover source={{ uri:production.imageUrl }} style={{ width: 75, height: 75, padding: 5 }} />
			<Card.Content>
				<Text style={{fontSize: 24}}>{production.title}</Text>
				<Text>{production.description}</Text>
			</Card.Content>
		</Card>
	</View>
);
export default ProductionListRow;
