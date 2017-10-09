import Timeline from '../components/Timeline/Timeline'
import { operationPhases } from '../data/operations'
import { connect } from 'react-redux'

import moment from 'moment'

const mapStateToProps = (state, ownProps) => {

	const date = moment(state.date)

	const operations = state.operations.filter(op => moment(op.phases[0].start).isSame(date, 'day'))
	const theaters = state.theaters.filter(theater => operations.some(op => op.theater === theater.id))

	operations.forEach(operation => 
		operation.phases = operation.phases.map(phase => {
			return {
				name: phase.name,
				start: moment(phase.start),
				end: phase.end ? moment(phase.end) : null,
				color: operationPhases[phase.name].color,
				column: theaters.findIndex(theater => theater.id === operation.theater)
			}
		}))
	return {
		date: date,
		operations: operations,
		theaters: theaters,
		...ownProps
	}
}

const TodayTimeline = connect(
	mapStateToProps,
	null
)(Timeline)

export default TodayTimeline