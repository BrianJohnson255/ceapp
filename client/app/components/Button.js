import React, { Component } from 'react';
import { Button as PaperButton } from 'react-native-paper';

export default class Button extends Component {
	render() {
		return (
			<PaperButton
				mode="outlined"
				onPress={ this.props.onPress }
				style={ this.props.style }
			>
				{ this.props.children }
			</PaperButton>
		);
	}
}
