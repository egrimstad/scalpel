import { combineReducers } from 'redux'
import date from './date'
import operations from './operations'
import theaters from './theaters'
import plan from './plan'

const scalpelReducer = combineReducers({
	date,
	operations,
	theaters,
	plan
})

export default scalpelReducer