import { connect } from 'react-redux'
import Header from '../components/Header/Header'
import { setSelectedDate } from '../actions'

import moment from 'moment'

const mapStateToProps = (state, ownProps) => {
	return {
		selectedDate: moment(state.date),
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
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header)