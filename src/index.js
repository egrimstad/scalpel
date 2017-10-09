import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './styles/index.css'
import 'typeface-roboto'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import scalpelReducer from './reducers'

import moment from 'moment'

moment.locale('no')

const store = createStore(
	scalpelReducer,
	undefined, // Initial state in reducers
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root'))

registerServiceWorker()