import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProductionListRow = ({ title, description, imageUrl }) => (
	<View>
		<Image source={{ uri: imageUrl }} style={{ width: 50, height: 50 }} />
		<View>
			<Text>
				{title}
			</Text>
			<Text>
				{description}
			</Text>
		</View>

	</View>
);

export default ProductionListRow;
