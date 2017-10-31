import { combineReducers } from 'redux'
import date from './date'
import operations from './operations'
import theaters from './theaters'
import operationPhases from './operationPhases'
import selectedPlan from './selectedPlan'
import plans from './plans'
import persons from './persons'
import loggedInUser from './loggedInUser'

const scalpelReducer = combineReducers({
	date,
	operations,
	operationPhases,
	theaters,
	plans,
	selectedPlan,
	persons,
	loggedInUser
})

export default scalpelReducer