import { connect } from 'react-redux'
import MenuDrawer from '../components/MenuDrawer/MenuDrawer'
import { setSelectedPlan, closeMenuDrawer } from '../actions'

const mapStateToProps = (state, ownProps) => {
	return {
		...ownProps,
		plans: state.plans,
		selectedPlan: state.selectedPlan,
		user: state.persons.find(person => person.id === state.loggedInUser),
		open: state.menuDrawerOpen
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSelectPlan: plan => {
			dispatch(setSelectedPlan(plan))
		},
		onRequestClose: () => {
			dispatch(closeMenuDrawer())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuDrawer)