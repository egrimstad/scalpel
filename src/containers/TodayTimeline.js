import Timeline from '../components/Timeline/Timeline'
import { operationPhases } from '../data/operations'
import { connect } from 'react-redux'

import moment from 'moment'

const lastPhase = operation => {
	return operation.phases[operation.phases.length-1]
}

const firstPhase = operation => {
	return operation.phases[0]
}

const startTime = operation => {
	const actualStartTime = firstPhase(operation) && firstPhase(operation).start

	if(actualStartTime) {
		return moment(Math.min(moment(operation.plannedStartTime), moment(actualStartTime)))
	}
	return moment(operation.plannedStartTime)
}

const endTime = operation => {
	const actualFinishTime = lastPhase(operation) && (lastPhase(operation).end || lastPhase(operation).start)
	if(actualFinishTime) {
		return moment(Math.max(moment(operation.plannedEndTime), moment(actualFinishTime)))
	}
	return moment(operation.plannedEndTime)
}
const selectNonOverlappingOperations = operations => {
	const nonOverlappingOperations = []
	const rest = []
	const sortedOperations = operations.sort((op1, op2) => endTime(op1) > endTime(op2))

	nonOverlappingOperations.push(sortedOperations[0])

	let lastOperationAdded = operations[0]

	sortedOperations.slice(1).forEach(op => {
		if(startTime(op) > endTime(lastOperationAdded)) {
			nonOverlappingOperations.push(op)
			lastOperationAdded = op
		}else{
			rest.push(op)
		}
	})

	return [rest, nonOverlappingOperations]

}

const organizeOperationsIntoColumns = (operations, theater) => {
	let result = []
	let column = 0
	let rest = operations
	while(rest.length > 0) {
		let [checkRest, selected] = selectNonOverlappingOperations(rest)
		rest = checkRest
		result = result.concat(selected.map(op => {
			const phases = op.phases.map(phase => {
				return {
					name: phase.name,
					start: moment(phase.start),
					end: phase.end ? moment(phase.end) : null,
					color: operationPhases[phase.name].color,
					theater: theater,
					subColumn: column
				}
			})
			return {
				...op,
				phases: phases,
				theater: theater,
				subColumn: column
			}
		}))
		column++
	}
	return [result, column]
}

const mapStateToProps = (state, ownProps) => {

	const date = moment(state.date)

	const operations = state.operations.filter(op => moment(op.phases[0].start).isSame(date, 'day'))
	const theaters = state.theaters.filter(theater => operations.some(op => op.theater === theater.id))

	let transformedOperations = []
	let numColumns = 0

	theaters.forEach(theater => {
		const opsInTheater = operations.filter(op => op.theater === theater.id)
		let [ops, cols] = organizeOperationsIntoColumns(opsInTheater, theater)
		transformedOperations = transformedOperations.concat(ops)
		theater.startColumn = numColumns
		theater.columns = cols
		numColumns += cols
	})
	return {
		date: date,
		operations: transformedOperations,
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