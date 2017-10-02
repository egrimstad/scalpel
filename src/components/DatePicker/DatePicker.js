import React, { Component } from 'react'
import InfiniteCalendar from 'react-infinite-calendar'
import 'react-infinite-calendar/styles.css' // only needs to be imported once

class DatePicker extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const today = this.props.today
		const open = this.props.open
		var calendar = null

		if (open) {
			calendar = <InfiniteCalendar width={400} height={600} selected={today} disabledDays={[0,6]} /*minDate={this.lastWeek}*/ />
		}
		
		return (
			<div>
				{calendar}
			</div>
		)
	}
}

export default DatePicker