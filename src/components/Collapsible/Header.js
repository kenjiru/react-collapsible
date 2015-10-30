import React from "react";

import "./Header.less";

class Header extends React.Component {
	render() {
		return (
			<div className={this.getClassName()} onClick={this.handleClicked.bind(this)}>
				{ this.props.children }
			</div>
		);
	}

	getClassName() {
		let className = "collapsible-header";

		if (this.props.className) {
			className += " " + this.props.className;
		}

		return className;
	}

	handleClicked(ev) {
		this.props.collapsible.toggle();
		this.props.onClick(ev);
	}
}

Header.defaultProps = {
	collapsible: null,
	onClick: () => {}
};

export default Header;
