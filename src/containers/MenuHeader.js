import React from 'react'
import { connect } from 'react-redux'
import MenuIcon from 'material-ui-icons/Menu'

import DateHeader from '../components/Header/DateHeader'
import { setSelectedDate, openMenuDrawer } from '../actions'

import moment from 'moment'

const mapStateToProps = (state, ownProps) => {
	return {
		date: moment(state.date),
		title: state.selectedPlan.name,
		leftButtonIcon: <MenuIcon />,
		dateEditable: true,
		...ownProps,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onEditDate: date => dispatch(setSelectedDate(date)),
		onLeftButtonClick: () => dispatch(openMenuDrawer())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DateHeader)