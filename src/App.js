import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import theme from './theme/theme'
import MenuDrawer from './containers/MenuDrawer'
import TodayTimeline from './containers/TodayTimeline'
import OperationList from './containers/OperationList'
import MyPlan from './containers/MyPlan'
import OperationDetails from './containers/OperationDetails'

import './styles/App.css'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			menuOpen: false
		}

		this.openMenu = this.openMenu.bind(this)
		this.closeMenu = this.closeMenu.bind(this)
		this.setHeaderItems = this.setHeaderItems.bind(this)
	}

	openMenu() {
		if (this.state.menuOpen) return
		this.setState(() => ({menuOpen: true}))
	}

	closeMenu() {
		if (!this.state.menuOpen) return	
		this.setState(() => ({menuOpen: false}))
	}

	setHeaderItems(items) {
		this.setState(() => ({headerItems: items}))
	}

	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<Router>
					<div>
						<MenuDrawer open={this.state.menuOpen} onRequestClose={this.closeMenu} />

						<div className="App-content">
							<Route exact path="/" render={props =>
								<TodayTimeline openMenu={this.openMenu} history={props.history} />
							} />
							<Route exact path="/operations" render={() =>
								<OperationList openMenu={this.openMenu} />
							} />
							<Route exact path="/operations/:operationId" render={props =>
								<OperationDetails {...props} />
							} />
							<Route exact path="/plan" render={props =>
								<MyPlan {...props} openMenu={this.openMenu} />
							} />
						</div>
					</div>
				</Router>
			</MuiThemeProvider>
		)
	}
}

export default App
