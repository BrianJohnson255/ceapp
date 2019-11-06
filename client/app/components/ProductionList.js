import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import ProductionListRow from './ProductionListRow.js';

const ProductionList = ({ itemList }) => (
	<View>
		<FlatList
				data={itemList}
				renderItem={({ item }) => <ProductionListRow
					title={item.title}
					description={item.description}
					imageUrl={item.imageUrl}
				/>}
				keyExtractor={item => item.id}
			/>

	</View>
);

export default ProductionList;
