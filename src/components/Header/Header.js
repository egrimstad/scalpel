import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import MenuIcon from 'material-ui-icons/Menu'
import MoreMenu from '../MoreMenu/MoreMenu'
import MoreVert from 'material-ui-icons/MoreVert'
import DateRange from'material-ui-icons/DateRange'
import DatePicker from '../DatePicker/DatePicker'

class Header extends Component {
	constructor(props) {
		super(props)

		this.state = {
			open: false,
			anchorEl: null,
			pickerOpen: false
		}

		this.handleClick = this.handleClick.bind(this)
		this.handleRequestClose = this.handleRequestClose.bind(this)
		this.toggleDatePicker = this.toggleDatePicker.bind(this)
	}


	handleClick(event) {
		this.setState({ open: true, anchorEl: event.currentTarget })
	}

	handleRequestClose() {
		this.setState({ open: false })
	}

	toggleDatePicker() {
		this.setState((prevState) => ({ pickerOpen: !prevState.pickerOpen}))
	}

	render() {
		return (
			<div>
				<AppBar position="fixed">
					<Toolbar>
						<IconButton onClick={this.props.onMenuButtonClick}>
							<MenuIcon />
						</IconButton>
						<Typography type="title" color="inherit" noWrap style={{flex: 1}}>
							Scalpel
						</Typography>
						<IconButton type="range" onClick={this.toggleDatePicker}>
							<DateRange />
						</IconButton>
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
				<div style={{position: 'absolute', margin: 'auto', left: 0, right: 0, display: 'flex', justifyContent: 'center', margin: 'auto'}}>
					<DatePicker open={this.state.pickerOpen} today={new Date()} />
				</div>
			</div>
		)
	}
}

Header.propTypes = {
	onMenuButtonClick: PropTypes.func
}

export default Header