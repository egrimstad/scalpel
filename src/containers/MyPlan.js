import UserPlan from '../components/UserPlan/UserPlan'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
	return {
		...ownProps,
		user: state.persons.find(person => person.id === state.loggedInUser)
	}
}

const MyPlan = connect(mapStateToProps, null)(UserPlan)

export default MyPlan