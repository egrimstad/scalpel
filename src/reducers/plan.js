import plans from '../data/plans'

const plan = (state = plans[0], action) => {
	switch(action.type) {
	case 'SET_SELECTED_PLAN':
		return action.plan
	default:
		return state
	}
}

export default plan