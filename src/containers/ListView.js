import { connect } from 'react-redux'
import ListView from '../components/OperationList/ListView'
import moment from 'moment'

const operationsByTheatre = (todayOperations, theatreId) =>
	todayOperations
		.filter(operation => operation.theater == theatreId) //correct theatre and today
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
	const theaters = state.theaters
		.filter(theater => operationsToday.some(op => op.theater === theater.id))
		.map(theater => {
			return {
				...theater,
				operations: operationsByTheatre(operationsToday, theater.id),
			}
		})
	return {
		theaters: theaters,
		...ownProps
	}
}

export default connect(
	mapStateToProps,
	null
)(ListView)