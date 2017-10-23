import moment from 'moment'

const date = (state = moment(), action) => {
	switch(action.type) {
	case 'SET_SELECTED_DATE':
		return action.date
	default:
		return state
	}
}

export default date