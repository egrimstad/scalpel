import { combineReducers } from 'redux'
import date from './date'
import operations from './operations'
import theaters from './theaters'
import operationPhases from './operationPhases'
import selectedPlan from './selectedPlan'
import plans from './plans'

const scalpelReducer = combineReducers({
	date,
	operations,
	operationPhases,
	theaters,
	plans,
	selectedPlan
})

export default scalpelReducer