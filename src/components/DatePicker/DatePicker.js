import React, { Component } from 'react'
import InfiniteCalendar from 'react-infinite-calendar'
import 'react-infinite-calendar/styles.css' // only needs to be imported once

class DatePicker extends Component {
	constructor(props) {
		super(props)

		this.state = {
			today: new Date(),
			//lastWeek: new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() - 7)
		}
	}

	render() {
		return (
			<div>
				<InfiniteCalendar
					width={400}
					height={600}
					selected={this.today}
					disabledDays={[0,6]}
					//minDate={this.lastWeek}
				/>
			</div>
		)
	}
}

export default DatePicker