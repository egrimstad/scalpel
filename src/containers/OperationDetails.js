import { connect } from 'react-redux'
import OperationDetails from '../components/OperationDetails/OperationDetails'

import { patientAge } from 'utils/operationUtils'

import moment from 'moment'


const mapStateToProps = (state, ownProps) => {
	const operation = state.operations.find(x => x.id == ownProps.match.params.operationId)

	operation.phases = operation.phases.map(phase => {
		const opPhase = state.operationPhases.actual.find(opPhase => opPhase.id === phase.id)
		return {
			...phase,
			...opPhase
		}
	})

	operation.plannedPhases = operation.plannedPhases.map((phase, i, phases) => {
		const opPhase = state.operationPhases.planning.find(opPhase => opPhase.id === phase.id)
		const start = phases.filter((_, j) => j < i).reduce(
			(acc, current) => acc.clone().add(current.duration, 'minutes'), 
			moment(phases[0].start))
		return {
			...phase,
			...opPhase,
			start: start,
			end: start.clone().add(phase.duration, 'minutes')
			
		}
	})
	operation.patientAge = patientAge(operation)
	operation.crew = operation.crew.map(person => {
		return {
			...person,
			...state.persons.find(other => person.id === other.id)
		}
	})
	return {
		operation: operation,
		...ownProps
	}
}

export default connect(
	mapStateToProps,
	null
)(OperationDetails)