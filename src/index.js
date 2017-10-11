import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import 'typeface-roboto'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import moment from 'moment'

moment.locale('no')

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()