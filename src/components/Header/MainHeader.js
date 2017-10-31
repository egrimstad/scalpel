import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import MenuIcon from 'material-ui-icons/Menu'
import Button from 'material-ui/Button'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import moment from 'moment'

class MainHeader extends Component {
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
		this.onSelectDate = this.onSelectDate.bind(this)
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

	onSelectDate(date) {
		this.toggleDatePicker()
		this.props.onSelectDate(date)
	}

	render() {
		return (
			<AppBar position="fixed">
				<Toolbar>
					<IconButton onClick={this.props.onMenuClick} style={{color: '#fff'}}>
						<MenuIcon />
					</IconButton>
					<Typography color="inherit" noWrap style={{flex:1}}>
						{this.props.planName}
					</Typography>
					<Button
						onClick={this.toggleDatePicker}
						color="primary"
						raised
					>
						{moment(this.props.selectedDate).format('DD. MMM')}
					</Button>
				</Toolbar>
				{this.state.pickerOpen && 
				<DatePicker
					selected={this.props.selectedDate}
					withPortal
					inline
					onClickOutside={this.toggleDatePicker}
					onSelect={this.onSelectDate}
					locale='nb'
				/>
				}
			</AppBar>
		)
	}
}

MainHeader.propTypes = {
	onMenuClick: PropTypes.func,
	onSelectDate: PropTypes.func,
	selectedDate: PropTypes.object
}

export default MainHeader