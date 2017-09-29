import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import MenuIcon from 'material-ui-icons/Menu'
import MoreMenu from '../MoreMenu/MoreMenu'
import MoreVert from 'material-ui-icons/MoreVert'

class Header extends Component {
	constructor(props) {
		super(props)

		this.state = {
			open: false,
			anchorEl: null
		}

		this.handleClick = this.handleClick.bind(this)
		this.handleRequestClose = this.handleRequestClose.bind(this)
	}


	handleClick(event) {
		this.setState({ open: true, anchorEl: event.currentTarget })
	}

	handleRequestClose() {
		this.setState({ open: false })
	}

	render() {
		return (
			<AppBar position="fixed">
				<Toolbar>
					<IconButton onClick={this.props.onMenuButtonClick}>
						<MenuIcon />
					</IconButton>
					<Typography type="title" color="inherit" noWrap>
						Scalpel
					</Typography>
					<IconButton
						aria-owns={this.state.open ? 'more-menu' : null}
						aria-haspopup="true"
						onClick={this.handleClick}
					>
						<MoreVert />
					</IconButton>
					<MoreMenu open={this.state.open} anchorEl={this.state.anchorEl} handleRequestClose={this.handleRequestClose}/>
				</Toolbar>
			</AppBar>
		)
	}
}

Header.propTypes = {
	onMenuButtonClick: PropTypes.func
}

export default Header