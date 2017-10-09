import { combineReducers } from 'redux'
import date from './date'
import operations from './operations'
import theaters from './theaters'

const scalpelReducer = combineReducers({
	date,
	operations,
	theaters
})

export default scalpelReducer