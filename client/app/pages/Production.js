import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import ProductionList from "../components/ProductionList.js";
import ProductionListRow from "../components/ProductionListRow.js";

export default class Home extends Component {
	constructor(params) {
		super(params)

		this.state = {
			productions: [
				{
					title: "Dogs",
					description: "about dogs",
					imageUrl: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTQ3NjM5ODIyNjU0MTIxMDM0/snoop_dogg_photo_by_estevan_oriol_archive_photos_getty_455616412.jpg",
					id: "1",
				},
			],
		};
	}

	render() {
		return (
			<View style={styles.item}>
				<ProductionList
          			itemList={this.state.productions}
        		/>
      		</View>
		);
	}
}

const styles = StyleSheet.create({
	item: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	itemText: {
		color: 'black',
		fontSize: 30,
	},
});
