import moment from 'moment'
import isNil from 'lodash/isNil'
import last from 'lodash/last'

export const firstPhase = operation => operation.phases[0]

export const lastStartedPhase = operation => last(startedPhases(operation))

export const lastOperationEventTime = operation => {
	return startedPhases(operation).reduce((acc, phase) => phase.end || phase.start || acc, null)
}

export const nextPhase = operation => operation.phases.find(phase => isNil(phase.start))

export const startedPhases = operation => operation.phases.filter(phase => !isNil(phase.start))

export const activePhase = operation => startedPhases(operation).find(phase => isNil(phase.end))

export const hasActivePhase = operation => startedPhases(operation).some(phase => isNil(phase.end))

export const hasPhaseEnded = phase => !isNil(phase.end)

export const startTime = operation => {
	const actualStartTime = firstPhase(operation) && firstPhase(operation).start

	if(actualStartTime) {
		return moment.min(moment(operation.plannedStartTime), moment(actualStartTime))
	}
	return moment(operation.plannedStartTime)
}

export const endTime = operation => {
	const actualFinishTime = lastStartedPhase(operation).end || lastStartedPhase(operation).start
	if(actualFinishTime) {
		return moment.max(moment(operation.plannedEndTime), moment(actualFinishTime))
	}
	return moment(operation.plannedEndTime)
}

export const surgeon = operation => operation.crew.find(person => person.position === 'kirurg')