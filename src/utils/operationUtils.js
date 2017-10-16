import moment from 'moment'

const lastPhase = operation => {
	return operation.phases[operation.phases.length-1]
}

const firstPhase = operation => {
	return operation.phases[0]
}

export const startTime = operation => {
	const actualStartTime = firstPhase(operation) && firstPhase(operation).start

	if(actualStartTime) {
		return moment(Math.min(moment(operation.plannedStartTime), moment(actualStartTime)))
	}
	return moment(operation.plannedStartTime)
}

export const endTime = operation => {
	const actualFinishTime = lastPhase(operation) && (lastPhase(operation).end || lastPhase(operation).start)
	if(actualFinishTime) {
		return moment(Math.max(moment(operation.plannedEndTime), moment(actualFinishTime)))
	}
	return moment(operation.plannedEndTime)
}