import UserPlan from '../components/UserPlan/UserPlan'
import { connect } from 'react-redux'
import { patientAge } from 'utils/operationUtils'
import { transformOperation } from 'utils/operationTransform'

import moment from 'moment'

export const mapStateToProps = (state, ownProps) => {
	return {
		...ownProps,
		date: state.date,
		operations: state.operations
			.filter(op => moment(op.operatingDate).isSame(state.date, 'day'))
			.filter(op => op.crew.some(person => person.id === state.loggedInUser))
			.map(op => ({
				...transformOperation(op, state),
				theater: state.theaters.find(theater => theater.id === op.theater),
				patientAge: patientAge(op),
				role: op.crew.find(person => person.id === state.loggedInUser).position
			}))
	}
}

const MyPlan = connect(mapStateToProps, null)(UserPlan)

export default MyPlan