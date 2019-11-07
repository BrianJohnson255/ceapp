import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProductionListRow = ({ production }) => (
	<View style = {{width: 400, height: 125}}>
		<Image source={{ uri: production.imageUrl }} style={{ width: 75, height: 75 }} />
		<View>
			<Text>
				{production.title}
			</Text>
			<Text>
				{production.description}
			</Text>
		</View>

	</View>
);

export default ProductionListRow;
