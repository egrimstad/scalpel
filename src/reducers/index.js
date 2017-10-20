import { combineReducers } from 'redux'
import date from './date'
import operations from './operations'
import theaters from './theaters'
import operationPhases from './operationPhases'

const scalpelReducer = combineReducers({
	date,
	operations,
	operationPhases,
	theaters
})

export default scalpelReducer