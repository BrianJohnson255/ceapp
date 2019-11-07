import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import ProductionListRow from './ProductionListRow.js';

const ProductionList = ({ itemList }) => (
	<View>
		<FlatList
				data={itemList}
				renderItem={({ item }) => <ProductionListRow production={item} />}
				keyExtractor={item => item.id}
			/>

	</View>
);

export default ProductionList;
