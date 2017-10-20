import moment from 'moment'

const lastPhase = operation => {
	return operation.phases[operation.phases.length-1]
}

const firstPhase = operation => {
	return operation.phases[0]
}

const lastPlanned = operation => {
	return operation.plannedPhases[operation.plannedPhases.length-1]
}

const firstPlanned = operation => {
	return operation.plannedPhases[0]
}

export const startTime = operation => {
	const actualStartTime = firstPhase(operation) && firstPhase(operation).start
	const plannedStartTime = firstPlanned(operation) && firstPlanned(operation).start

	if(actualStartTime  && plannedStartTime) {
		return moment(Math.min(moment(plannedStartTime), moment(actualStartTime)))
	}
	return moment(plannedStartTime)
}

export const endTime = operation => {
	const actualFinishTime = lastPhase(operation) && (lastPhase(operation).end || lastPhase(operation).start)
	const plannedFinishTime = lastPlanned(operation) && (lastPlanned(operation).end || lastPlanned(operation).start)

	if(actualFinishTime && plannedFinishTime) {
		return moment(Math.max(moment(plannedFinishTime), moment(actualFinishTime)))
	}
	return moment(plannedFinishTime)
}