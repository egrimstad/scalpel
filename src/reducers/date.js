const date = (state = new Date('2017-09-20'), action) => {
	switch(action.type) {
	case 'SET_SELECTED_DATE':
		return action.date
	default:
		return state
	}
	
}

export default date