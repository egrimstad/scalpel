import React, { Component } from 'react'
import MoreVert from 'material-ui-icons/MoreVert'
import IconButton from 'material-ui/IconButton'
import Menu, { MenuItem } from 'material-ui/Menu'

class MoreMenu extends Component {
	constructor(props) {
		super(props)

		this.state = {
			anchorEl: null,
			open: false,
		}
	}
  

	handleClick(event) {
		this.setState({ open: true, anchorEl: event.currentTarget })
	}

	handleRequestClose() {
		this.setState({ open: false })
	}

	render() {
		return (
			<div>
				<IconButton
					aria-owns={this.state.open ? 'simple-menu' : null}
					aria-haspopup="true"
					onClick={this.handleClick}
				>
					<MoreVert />
				</IconButton>
				<Menu
					id="simple-menu"
					anchorEl={this.state.anchorEl}
					open={this.state.open}
					onRequestClose={this.handleRequestClose}
				>
					<MenuItem onClick={this.handleRequestClose}>Profile</MenuItem>
					<MenuItem onClick={this.handleRequestClose}>My account</MenuItem>
					<MenuItem onClick={this.handleRequestClose}>Logout</MenuItem>
				</Menu>
			</div>
		)
	}
}

export default MoreMenu