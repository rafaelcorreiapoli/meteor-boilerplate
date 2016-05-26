import React, { Component } from 'react';
import Menu from '/imports/ui/components/menu/Menu.jsx';

export default class App extends Component {
	render() {
		return (
			<div>
				<Menu />
				{this.props.children}
			</div>
		);
	}
}
