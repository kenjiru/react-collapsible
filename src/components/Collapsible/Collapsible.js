import React from "react";

import Header from "./Header.js";
import Body from "./Body.js";

import "./Collapsible.less";

class Collapsible extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			expanded: this.props.expanded,
			animationPhase: Collapsible.AnimationPhases.collapsed
		};
		this.animationTimer = null;
	}

	componentDidMount() {
		if (this.props.expanded) {
			this.expand();
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.expanded !== this.state.expanded) {
			if (nextProps.expanded) {
				this.expand();
			} else {
				this.collapse();
			}
		}
	}

	componentWillUnmount() {
		this.clearTimer();
	}

	render() {
		return (
			<div className={this.getClassName()}>
				{this.renderHeader()}
				{this.renderBody()}
			</div>
		);
	}

	renderHeader() {
		let header = this.findChild(Header);

		return React.cloneElement(header, {
			onClick: this.props.onClick,
			collapsible: this
		});
	}

	renderBody() {
		if (this.state.animationPhase == Collapsible.AnimationPhases.collapsed) {
			return;
		}

		return this.findChild(Body);
	}

	findChild(childType) {
		let targetChild = null;

		React.Children.forEach(this.props.children, (child) => {
			if (child.type == childType) {
				targetChild = child;
			}
		});

		return targetChild;
	}

	getClassName() {
		let className = "collapsible";

		if (this.props.className) {
			className += " " + this.props.className;
		}

		if (this.state.animationPhase) {
			className += " " + this.state.animationPhase;
		}

		return className;
	}

	toggle() {
		if (this.state.expanded) {
			this.collapse();
		} else {
			this.expand();
		}
	}

	expand() {
		if (this.state.animationPhase == Collapsible.AnimationPhases.preExpanding ||
			this.state.animationPhase == Collapsible.AnimationPhases.expanding ||
			this.state.animationPhase == Collapsible.AnimationPhases.expanded) {
			return;
		}
		this.clearTimer();

		if (this.state.animationPhase == Collapsible.AnimationPhases.collapsed) {
			this.setPreExpandingState();
		} else {
			this.setExpandingState();
		}

	}

	setPreExpandingState() {
		this.setState({
			animationPhase: Collapsible.AnimationPhases.preExpanding,
			expanded: true
		}, () => {
			setTimeout(() => {
				this.setExpandingState();
			}, 10);
		});
	}

	setExpandingState() {
		this.setState({
			animationPhase: Collapsible.AnimationPhases.expanding,
			expanded: true
		}, () => {
			this.animationTimer = setTimeout(() => {
				this.setState({
					animationPhase: Collapsible.AnimationPhases.expanded
				});
				this.props.onExpanded();
				this.animationTimer = null;
			}, this.props.expandingAnimationDuration);
		});
	}

	collapse() {
		if (this.state.animationPhase == Collapsible.AnimationPhases.collapsing ||
			this.state.animationPhase == Collapsible.AnimationPhases.collapsed) {
			return;
		}
		this.clearTimer();

		this.setState({
			animationPhase: Collapsible.AnimationPhases.collapsing,
			expanded: false
		}, () => {
			this.animationTimer = setTimeout(() => {
				this.setState({
					animationPhase: Collapsible.AnimationPhases.collapsed
				});
				this.props.onCollapsed();
				this.animationTimer = null;
			}, this.props.collapsingAnimationDuration);
		});
	}

	clearTimer() {
		if (this.animationTimer) {
			clearTimeout(this.animationTimer);
		}
	}
}

Collapsible.AnimationPhases = {
	preExpanding: "pre-expanding",
	collapsed: "collapsed",
	expanded: "expanded",
	collapsing: "collapsing",
	expanding: "expanding"
};

Collapsible.defaultProps = {
	expandingAnimationDuration: 300,
	collapsingAnimationDuration: 300,
	onClick: () => {},
	onExpanded: () => {},
	onCollapsed: () => {},
	expanded: true
};

export default Collapsible;
