import { actualPhases as initialActualPhases, planningPhases as initialPlanningPhases } from '../data/operations'

const initialState = {
	actual: initialActualPhases,
	planning: initialPlanningPhases
}

const operationPhases = (state = initialState, action) => {
	switch(action.type) {
	default:
		return state
	}
}

export default operationPhases