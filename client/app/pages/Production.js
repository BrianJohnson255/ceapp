import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Appbar, Searchbar } from 'react-native-paper';
import ProductionList from "../components/ProductionList.js";
import ProductionListRow from "../components/ProductionListRow.js";

import R from 'ramda';

import { searchProjects } from '../api/project';

const placeholderImg = "https://picsum.photos/75";

export default class Home extends Component {
	constructor(params) {
		super(params)

		this.state = {
			productions: [],
			queriedProductions: [],
		};
		
		}

	async componentDidMount() {
		const res = await searchProjects({ title: "", description: "" })
		if (res.status === 200) {
			const retrievedProductions = R.map(R.assoc('imageUrl', placeholderImg), res.data.projects);
			this.setState({ productions: retrievedProductions, queriedProductions: retrievedProductions });
		}
	}
	
	productionSearch(query) {
		newQueriedProductions = [];
		
		var i;
		for (i = 0; i < this.state.productions.length; i++) {
			if (this.state.productions[i].title.search(query) != -1) {
				newQueriedProductions.push(this.state.productions[i]);
			}
		}
		
		this.setState({ queriedProductions: newQueriedProductions});
	}

	render() {
		
		const { goBack } = this.props.navigation;
		const { navigate } = this.props.navigation;
		
		return (
			<View style={{flex: 1}}>
				<Appbar.Header>
					<Appbar.BackAction onPress={() => goBack()} />
					<Appbar.Content title="Production" />
					<Appbar.Action icon="account" onPress={() => navigate('UserInfo')} />
				</Appbar.Header>
				<View style={{padding: 10}}>
					<Searchbar placeholder="Search" onChangeText={query => { this.productionSearch(query) }}/>
				</View>
				<View style={styles.item}>
					<ProductionList
						itemList={this.state.queriedProductions}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	item: {
		flex: 1,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	itemText: {
		color: 'black',
		fontSize: 30,
	},
});
