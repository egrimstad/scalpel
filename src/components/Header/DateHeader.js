import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import moment from 'moment'

class DateHeader extends Component {
	constructor(props) {
		super(props)

		this.state = {
			pickerOpen: false
		}

		this.toggleDatePicker = this.toggleDatePicker.bind(this)
		this.onSelectDate = this.onSelectDate.bind(this)
	}

	toggleDatePicker() {
		this.setState(prevState => ({ pickerOpen: !prevState.pickerOpen}))
	}

	onSelectDate(date) {
		this.toggleDatePicker()
		this.props.onEditDate(moment(date))
	}

	render() {
		const dateEditable = this.props.dateEditable
		return (
			<AppBar position="fixed">
				<Toolbar>
					<IconButton onClick={this.props.onLeftButtonClick} color="inherit">
						{this.props.leftButtonIcon}
					</IconButton>
					<Typography color="inherit" noWrap style={{flex:1}}>
						{this.props.title}
					</Typography>
					<Button
						onClick={dateEditable ? this.toggleDatePicker : null}
						color={dateEditable ? 'primary' : 'contrast'}
						raised={dateEditable}
						disableRipple={!dateEditable}
					>
						{moment(this.props.date).format('DD. MMM')}
					</Button>
				</Toolbar>
				{this.state.pickerOpen && 
					<DatePicker
						selected={this.props.date}
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

DateHeader.propTypes = {
	leftButtonIcon: PropTypes.element,
	onLeftButtonClick: PropTypes.func,
	dateEditable: PropTypes.bool,
	onEditDate: PropTypes.func,
	date: PropTypes.object,
	title: PropTypes.string
}

export default DateHeader