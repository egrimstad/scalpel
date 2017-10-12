import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Tabs, { Tab } from 'material-ui/Tabs'
import SwipeableViews from 'react-swipeable-views'
import PhoneList from './PhoneList'
import Overview from './Overview'
import Operation from './Operation'
import Anesthesia from './Anesthesia'
import * as data from '../../data2'

function TabContainer(props) {
	return <div style={{ padding: 20 }}>{props.children}</div>
}

TabContainer.propTypes = {
	children: PropTypes.node.isRequired
}

const styles = theme => ({
	root: {
		flexGrow: 1,
		width: '100%',
		marginTop: 0,
		backgroundColor: theme.palette.background.paper,
	}
})

function getTabContent(operation) {

	return {tabs: [
		{
			name: 'Oversikt',
			fields: <Overview operation={operation}/>
		},
		{
			name: 'Operasjon',
			fields: <Operation operation={operation}/>
		},
		{
			name: 'Anestesi',
			fields: <Anesthesia operation={operation}/>
		},
		{
			name: 'Personell',
			fields: <PhoneList operation={operation}/>
		}

	]}
}

class OperationIndex extends Component {
	constructor(props) {
		super(props)
		this.operationId = props.match.params.operationId
		this.operation = data.getOperationById(14867)
		this.state = {
			value: 0
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleChangeIndex = this.handleChangeIndex.bind(this)
	}

	handleChange(_, value) {
		this.setState({value})
	}

	handleChangeIndex(index) {
		this.setState({value: index})
	}

	render() {
		const { classes } = this.props
		return (
			<div className={classes.root}>
				<AppBar position="static" color="default">
					<Tabs
						value={this.state.value}
						onChange={this.handleChange}
						indicatorColor="primary"
						textColor="primary"
						scrollable
						scrollButtons="auto"
					>
						{getTabContent().tabs.map((tab, tIndex) => {
							return <Tab label={tab.name} key={tIndex}/>
						})}
					</Tabs>
				</AppBar>
				<SwipeableViews index={this.state.value} onChangeIndex={this.handleChangeIndex}>
					{getTabContent(this.operation).tabs.map((tab, tIndex) =>
						tIndex === this.state.value ?
							<TabContainer key={tIndex}>
								<div>
									{tab.fields}
								</div>
							</TabContainer>:<div key={tIndex}></div>)}
				</SwipeableViews>
			</div>
		)
	}
}

OperationIndex.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(OperationIndex)