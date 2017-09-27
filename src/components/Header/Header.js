import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import MenuIcon from 'material-ui-icons/Menu'
import MoreMenu from '../MoreMenu/MoreMenu'

class Header extends Component {
	render() {
		return (
			<AppBar position="static">
				<Toolbar>
					<IconButton onClick={this.props.onMenuButtonClick}>
						<MenuIcon />
					</IconButton>
					<Typography type="title" color="inherit" noWrap>
						Scalpel
					</Typography>
					<IconButton>
						<MoreMenu />
					</IconButton>
				</Toolbar>
			</AppBar>
		)
	}
}

Header.propTypes = {
	onMenuButtonClick: PropTypes.func
}

export default Header