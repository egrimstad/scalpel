import moment from 'moment'
import initialOperations from '../data/operations'
import { lastStartedPhase, hasPhaseEnded, nextPhase } from 'utils/operationUtils'

const operations = (state = initialOperations, action) => {
	switch(action.type) {
	case 'FINISH_OPERATION_PHASE':
		return updateOperation(state, action, finishOperationPhase)
	case 'START_NEXT_OPERATION_PHASE':
		return updateOperation(state, action, startNextOperationPhase)
	default:
		return state
	}
}

const updateOperation = (state, action, updateFunc) => {
	return state.map(operation => {
		if(operation.id !== action.operationId) return operation
		return updateFunc(operation, action)
	})
}

const finishOperationPhase = (operation, action) => {
	const operationLastPhase = lastStartedPhase(operation)
	const time = action.time

	if(hasPhaseEnded(operationLastPhase) || moment(operationLastPhase.start).isAfter(time)) {
		return operation
	}
	
	return {
		...operation,
		phases: operation.phases.map(phase => {
			if(phase.id !== operationLastPhase.id) return phase
			return {
				...phase,
				end: time.format('YYYY-MM-DD HH:mm')
			}
		})
	}
}

const startNextOperationPhase = (operation, action) => {
	operation = finishOperationPhase(operation, action)

	const next = nextPhase(operation)

	if(!next) return operation

	return {
		...operation,
		phases: operation.phases.map(phase => {
			if(phase.id !== next.id) return phase
			return {
				...phase,
				start: action.time.format('YYYY-MM-DD HH:mm')
			}
		})
	}
}

export default operations