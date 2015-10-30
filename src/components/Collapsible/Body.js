import React from "react";

class Body extends React.Component {
	render() {
		return (
			<div className={this.getClassName()}>
				{ this.props.children }
			</div>
		);
	}

	getClassName() {
		let className = "collapsible-body";

		if (this.props.className) {
			className += " " + this.props.className;
		}

		return className;
	}
}

export default Body;
