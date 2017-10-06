import { operationPhases } from '../data'
import moment from 'moment'

export const getOperationBackground = (operation) => {

}

export const getOperationStartTime = (operation) => {
	return operation.phases[operationPhases[0]] ? moment(operation.phases[operationPhases[0]].start) : null
}

export const getOperationEndTime = (operation) => {
	const lastPhase = operationPhases[operationPhases.length-1]
	return operation.phases[lastPhase] ? moment(operation.phases[lastPhase].end) : null
}