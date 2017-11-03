import moment from 'moment'
import last from 'lodash/last'

import { startTime, endTime } from './operationUtils'

/**
 * Selects as many non-overlapping operations as possible
 * @param {*} operations 
 * @returns an object containing the selected operations and the rest
 */
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

const colorizedPhase = (phase, phaseTypes) => {
	const opPhase = phaseTypes.find(opPhase => opPhase.id === phase.id)
	return {
		...phase,
		...opPhase
	}
}

/**
 * Transforms an operation into the format that is expected by timeline component.
 * Adds color to the phases and adds end time to planned phases
 * @param {*} operation The operation to transform
 * @param {*} state State of the application
 * @param {*} phaseTransform Transform to pass planned and actual phases through if extra properties are wanted
 */
export const transformOperation = (operation, state, phaseTransform = phase => phase) => {
	const phases = operation.phases.map(phase => {
		return phaseTransform(
			colorizedPhase(phase, state.operationPhases.actual)
		)
	})
	let phaseStart = moment(operation.plannedPhases[0].start), phaseDuration = 0
	const plannedPhases = operation.plannedPhases.map(plannedPhase => {
		phaseStart = phaseStart.clone().add(phaseDuration, 'm')
		phaseDuration = plannedPhase.duration
		return phaseTransform({
			...colorizedPhase(plannedPhase, state.operationPhases.planning),
			start: phaseStart.format('YYYY-MM-DD HH:mm'),
			end: phaseStart.clone().add(phaseDuration, 'm').format('YYYY-MM-DD HH:mm'),
		})
	})
	return {
		...operation,
		phases: phases,
		plannedPhases: plannedPhases
	}
}

/**
 * Distributes operations into as many columns as needed so none overlap
 * @param {*} operations 
 * @returns An object that contains of the operations with added column prop and the number of columns needed
 */
export const distributeOperations = (operations, state) => {
	const distributedOperations = []
	let column = 0
	let rest = operations
	while(rest.length > 0) {
		const overlap = selectNonOverlappingOperations(rest)
		rest = overlap.rest
		distributedOperations.push(...overlap.selected.map(op => ({
			...transformOperation(op, state, phase => ({...phase, column: column})),
			column: column
		})))
		column++
	}
	return {
		operations: distributedOperations, 
		columns: column
	}
}