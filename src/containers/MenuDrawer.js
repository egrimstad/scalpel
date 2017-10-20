import { connect } from 'react-redux'
import MenuDrawer from '../components/MenuDrawer/MenuDrawer'
import { setSelectedPlan } from '../actions'

const mapDispatchToProps = dispatch => {
	return {
		onSelectPlan: plan => {
			dispatch(setSelectedPlan(plan))
		}
	}
}

export default connect(
	undefined,
	mapDispatchToProps
)(MenuDrawer)