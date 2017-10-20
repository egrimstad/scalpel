import { connect } from 'react-redux'
import MenuDrawer from '../components/MenuDrawer/MenuDrawer'
import { setSelectedPlan } from '../actions'

const mapStateToProps = (state, ownProps) => {
	return {
		...ownProps,
		plans: state.plans,
		selectedPlan: state.selectedPlan
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSelectPlan: plan => {
			dispatch(setSelectedPlan(plan))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuDrawer)