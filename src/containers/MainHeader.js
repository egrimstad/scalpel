import { connect } from 'react-redux'
import MainHeader from '../components/Header/MainHeader'
import { setSelectedDate } from '../actions'

import moment from 'moment'

const mapStateToProps = (state, ownProps) => {
	return {
		selectedDate: moment(state.date),
		planName: state.selectedPlan.name,
		...ownProps
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSelectDate: date => {
			dispatch(setSelectedDate(date))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader)