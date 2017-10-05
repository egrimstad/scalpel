import React, { Component } from 'react'
import Menu, { MenuItem } from 'material-ui/Menu'

class MoreMenu extends Component {
	render() {
		return (
			<div>
				<Menu
					id="more-menu"
					anchorEl={this.props.anchorEl}
					open={this.props.open}
					onRequestClose={this.props.handleRequestClose}
				>
					<MenuItem onClick={this.props.handleRequestClose}>Profile</MenuItem>
					<MenuItem onClick={this.props.handleRequestClose}>My account</MenuItem>
					<MenuItem onClick={this.props.handleRequestClose}>Logout</MenuItem>
				</Menu>
			</div>
		)
	}
}

export default MoreMenu