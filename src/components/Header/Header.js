import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import MenuIcon from 'material-ui-icons/Menu'
import MoreMenu from '../MoreMenu/MoreMenu'
import MoreVert from 'material-ui-icons/MoreVert'
import DateRange from'material-ui-icons/DateRange'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import moment from 'moment'

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
					<IconButton onClick={this.props.onMenuButtonClick} style={{color: '#fff'}}>
						<MenuIcon />
					</IconButton>
					<Typography color="inherit" noWrap style={{flex:1}}>
						{this.props.planName}
					</Typography>
					{this.props.headerItems}
					<Button
						aria-owns={this.state.pickerOpen ? 'date-picker' : null}
						aria-haspopup="true"
						onClick={this.toggleDatePicker}
						style={{color: '#fff'}}
						raised
						color="primary"
					>{moment(this.props.selectedDate).format('Do MMM')}
					</Button>
					<MoreMenu open={this.state.open} anchorEl={this.state.anchorEl} handleRequestClose={this.handleRequestClose}/>
				</Toolbar>
				{this.state.pickerOpen && 
				<DatePicker
					selected={this.props.selectedDate}
					inline
					withPortal
					onClickOutside={this.toggleDatePicker}
					onSelect={this.onSelectDate}
					locale='nb'
				/>
				}
			</AppBar>
		)
	}
}

Header.propTypes = {
	onMenuButtonClick: PropTypes.func,
	headerItems: PropTypes.array,
	onSelectDate: PropTypes.func,
	selectedDate: PropTypes.object
}

export default Header