import UserPlan from '../components/UserPlan/UserPlan'
import { connect } from 'react-redux'
import { patientAge } from 'utils/operationUtils'

import moment from 'moment'

const mapStateToProps = (state, ownProps) => {
	return {
		...ownProps,
		user: state.persons.find(person => person.id === state.loggedInUser),
		date: state.date,
		operations: state.operations
			.filter(op => moment(op.phases[0].start).isSame(state.date, 'day'))
			.filter(op => op.crew.some(person => person.id === state.loggedInUser))
			.map(op => {
				let phaseStart = moment(op.plannedPhases[0].start)
				let phaseDuration = 0
				return {
					...op,
					phases: op.phases.map(phase => {
						const opPhase = state.operationPhases.actual.find(opPhase => opPhase.id === phase.id)
						return {
							...phase,
							...opPhase
						}
					}),
					plannedPhases: op.plannedPhases.map(phase => {
						phaseStart = phaseStart.clone().add(phaseDuration, 'm')
						phaseDuration = phase.duration
						const opPhase = state.operationPhases.planning.find(opPhase => opPhase.id === phase.id)
						return {
							...phase,
							...opPhase,
							start: phaseStart,
							end: phaseStart.clone().add(phaseDuration, 'm'),
						}
					}),
					theater: state.theaters.find(theater => theater.id === op.theater),
					patientAge: patientAge(op)
				}
			})
	}
}

const MyPlan = connect(mapStateToProps, null)(UserPlan)

export default MyPlan