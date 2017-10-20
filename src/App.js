import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './styles/App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import theme from './theme/theme'
import Header from './containers/Header'
import MenuDrawer from './components/MenuDrawer/MenuDrawer'
import TodayTimeline from './containers/TodayTimeline'
import ListView from './containers/ListView'
import OperationIndex from './containers/OperationIndex'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			menuOpen: false,
			headerItems: []
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
						<MenuDrawer open={this.state.menuOpen} onRequestClose={this.closeMenu}/>
						<Header 
							onMenuButtonClick={this.openMenu} 
							headerItems={this.state.headerItems}
						/>

						<div className="App-content">
							<Route exact path="/" render={props =>
								<TodayTimeline setHeaderItems={this.setHeaderItems} history={props.history} />
							} />
							<Route exact path="/patients" render={() =>
								<ListView setHeaderItems={this.setHeaderItems} history={history} />
							} />
							<Route exact path="/operationDetails/:operationId" component={OperationIndex} />
						</div>
					</div>
				</Router>
			</MuiThemeProvider>
		)
	}
}

export default App
