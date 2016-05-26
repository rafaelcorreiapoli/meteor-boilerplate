import React, { Component } from 'react';
import Menu from '/imports/ui/components/menu/Menu.jsx';
import Footer from '/imports/ui/components/footer/Footer.jsx';
export default class App extends Component {

	render() {
		conditionalMenu = this.props.user ? <Menu /> : null;

		return (
			<div>
				{conditionalMenu}
				{this.props.children}
				<Footer />
			</div>
		);
	}
}
