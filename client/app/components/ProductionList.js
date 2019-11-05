
import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import ProductionListRow from './ProductionListRow.js';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

/*
const ProductionList = ({ itemList }) => (
    <View style={styles.container}>
        <FlatList
                data={itemList}
                renderItem={({ item }) => <ProductionListRow
                    title={item.title}
                    description={item.description}
                    image_url={item.image_url}
                />}
                keyExtractor={item => item.id}
            />

    </View>
);*/

const ProductionList = ({ itemList }) => (
    <View style={styles.container}>
        <FlatList
            //data={[{"title": "cats", "key": "2"}]}
            renderItem={({ item }) => <Text>Hello</Text>}
            keyExtractor={item => item.key}
        />

    </View>
);

export default ProductionList;