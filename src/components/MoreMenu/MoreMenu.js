import React, { Component } from 'react'
import Menu, { MenuItem } from 'material-ui/Menu'

class MoreMenu extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<Menu
					id="more-menu"
					anchorEl={this.props.anchorEl}
					open={this.props.open}
					onRequestClose={this.props.handleRequestClose}
				>
					<MenuItem onClick={this.props.handleRequestClose}>Bar view</MenuItem>
					<MenuItem onClick={this.props.handleRequestClose}>List view</MenuItem>
					<MenuItem onClick={this.props.handleRequestClose}>Force update</MenuItem>
				</Menu>
			</div>
		)
	}
}

export default MoreMenu