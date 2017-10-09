import React, { Component } from 'react'
import InfiniteCalendar from 'react-infinite-calendar'
import 'react-infinite-calendar/styles.css' // only needs to be imported once

class DatePicker extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const today = this.props.today
		const lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7)

		if (this.props.open) {
			return (
				<div style={{position: 'absolute', margin: 'auto', left: 0, right: 0, display: 'flex', justifyContent: 'center'}}>
					<InfiniteCalendar width={300} height={300} selected={today} disabledDays={[0,6]} minDate={lastWeek} /> {/* Sizes are not relative, needs to be fixed */}
				</div>
			)
		}

		else {
			return(
				null
			)
		}
	}
}

export default DatePicker