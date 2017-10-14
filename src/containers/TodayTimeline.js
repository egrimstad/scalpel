import Timeline from '../components/Timeline/Timeline'
import { operationPhases } from '../data/operations'
import { connect } from 'react-redux'

import last from 'lodash/last'

import { startTime, endTime } from 'utils/operationUtils'

import moment from 'moment'

const selectNonOverlappingOperations = operations => {
	const sorted = operations.sort((op1, op2) => endTime(op1) > endTime(op2))
	const nonOverlapping = [sorted[0]]
	const rest = []

	sorted.slice(1).forEach(op => {
		if(startTime(op) > endTime(last(nonOverlapping))) {
			nonOverlapping.push(op)
		}else{
			rest.push(op)
		}
	})
	return {
		selected: nonOverlapping, 
		rest: rest
	}
}

const organizeOperationsIntoColumns = operations=> {
	let result = []
	let column = 0
	let rest = operations
	while(rest.length > 0) {
		const overlap = selectNonOverlappingOperations(rest)
		rest = overlap.rest
		result = result.concat(overlap.selected.map(op => {
			const phases = op.phases.map(phase => {
				return {
					name: phase.name,
					start: moment(phase.start),
					end: phase.end ? moment(phase.end) : null,
					color: operationPhases[phase.name].color,
					column: column
				}
			})
			return {
				...op,
				phases: phases,
				column: column
			}
		}))
		column++
	}
	return [result, column]
}

const mapStateToProps = (state, ownProps) => {
	const date = moment(state.date)
	const operationsToday = state.operations.filter(op => moment(op.phases[0].start).isSame(date, 'day'))

	let numColumns = 0

	const theaters = state.theaters
		.filter(theater => operationsToday.some(op => op.theater === theater.id))
		.map(theater => {
			const [theaterOperations, columns] = organizeOperationsIntoColumns(operationsToday.filter(op => op.theater === theater.id))
			
			numColumns += columns
			return {
				...theater,
				operations: theaterOperations,
				startColumn: numColumns - columns,
				columns: columns
			}
		})
	return {
		date: date,
		theaters: theaters,
		numColumns: numColumns,
		...ownProps
	}
}

const TodayTimeline = connect(
	mapStateToProps,
	null
)(Timeline)

export default TodayTimeline