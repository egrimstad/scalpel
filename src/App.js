import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import theme from './theme/theme'
import MenuDrawer from './containers/MenuDrawer'
import TodayTimeline from './containers/TodayTimeline'
import OperationList from './containers/OperationList'
import OperationDetails from './containers/OperationDetails'

import './styles/App.css'

const App = () => {
	return (
		<MuiThemeProvider theme={theme}>
			<Router basename="/scalpel">
				<div>
					<MenuDrawer />
						
					<div className="App-content">
						<Switch>
							<Route exact path="/" render={props =>
								<TodayTimeline {...props} />
							} />
							<Route exact path="/operations" render={props =>
								<OperationList {...props} />
							} />
							<Route exact path="/operations/:operationId" render={props =>
								<OperationDetails {...props} />
							} />
							<Route exact path="/operations/:operationId" render={props =>
								<OperationDetails {...props} />
							} />
							<Redirect from="*" to="/" />
						</Switch>
					</div>
				</div>
			</Router>
		</MuiThemeProvider>
	)
}

export default App
