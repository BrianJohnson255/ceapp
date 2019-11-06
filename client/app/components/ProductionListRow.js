import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProductionListRow = ({ production }) => (
	<View>
		<Image source={{ uri: production.imageUrl }} style={{ width: 50, height: 50 }} />
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
