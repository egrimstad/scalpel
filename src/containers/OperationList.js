import { connect } from 'react-redux'
import OperationList from '../components/OperationList/OperationList'
import moment from 'moment'

const theatersFromPlan = (allTheaters, plan) =>
	allTheaters.filter(theater => plan.theaters.includes(theater.id))

const operationsByTheater = (todayOperations, theaterId) =>
	todayOperations
		.filter(operation => operation.theater == theaterId) //correct theatre and today
		.map(operation => {
			return {
				id: operation.id,
				patientName: operation.patientName,
				diagnosis: operation.diagnoseTypeFreeText ? operation.diagnoseTypeFreeText.replace(/(\r\n|\n|\r)/gm,'') : 'Ukjent diagnose',
				procedure: operation.procedureTypeFreeText ? operation.procedureTypeFreeText.replace(/(\r\n|\n|\r)/gm,'') : 'Ukjent inngrep'
			}
		})

const mapStateToProps = (state, ownProps) => {
	const operationsToday = state.operations.filter(op => moment(op.phases[0].start).isSame(moment(state.date), 'day'))
	const theaters = theatersFromPlan(state.theaters, state.selectedPlan)
		.filter(theater => operationsToday.some(op => op.theater === theater.id))
		.map(theater => {
			return {
				...theater,
				operations: operationsByTheater(operationsToday, theater.id),
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
