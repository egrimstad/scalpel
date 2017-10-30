import { connect } from 'react-redux'
import OperationList from '../components/OperationList/OperationList'
import moment from 'moment'

import { patientAge, patientGender } from 'utils/operationUtils'

const theatersFromPlan = (allTheaters, plan) =>
	allTheaters.filter(theater => plan.theaters.includes(theater.id))

const getAge = (birthDate, currentDay) => {
	var ageDifMs = currentDay.getTime() - birthDate.getTime()
	var ageDate = new Date(ageDifMs)
	return(Math.abs(ageDate.getUTCFullYear() - 1970))
}

const operationsByTheater = (todayOperations, theaterId, date) =>
	todayOperations
		.filter(operation => operation.theater == theaterId) //correct theatre and today
		.map(operation => {
			return {
				id: operation.id,
				patientName: operation.patientName,
				diagnosis: operation.diagnoseTypeFreeText ? operation.diagnoseTypeFreeText.replace(/(\r\n|\n|\r)/gm,'') : 'Ukjent diagnose',
				procedure: operation.procedureTypeFreeText ? operation.procedureTypeFreeText.replace(/(\r\n|\n|\r)/gm,'') : 'Ukjent inngrep',
				genderAge: `${patientGender(operation)}${patientAge(operation)}`
			}
		})

const mapStateToProps = (state, ownProps) => {
	const operationsToday = state.operations.filter(op => moment(op.phases[0].start).isSame(moment(state.date), 'day'))
	const currentDate = new Date(state.date)
	const theaters = theatersFromPlan(state.theaters, state.selectedPlan)
		.filter(theater => operationsToday.some(op => op.theater === theater.id))
		.map(theater => {
			return {
				...theater,
				operations: operationsByTheater(operationsToday, theater.id, currentDate),
			}
		})
	return {
		theaters: theaters,
		plan: state.plan,
		...ownProps
	}
}

export default connect(
	mapStateToProps,
	null
)(OperationList)
