import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import Tabs, { Tab } from 'material-ui/Tabs'
import ArrowBack from 'material-ui-icons/ArrowBack'
import SwipeableViews from 'react-swipeable-views'
import moment from 'moment'

import PhoneList from './PhoneList'
import Overview from './Overview'
import Operation from './Operation'
import Anesthesia from './Anesthesia'
import DateHeader from '../Header/DateHeader'

import './OperationDetails.css'

function TabContainer(props) {
	return <div style={{ padding: 10, paddingTop:0 }}>{props.children}</div>
}

TabContainer.propTypes = {
	children: PropTypes.node.isRequired
}

function tabContent(operation) {

	return {
		tabs: [
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

		]
	}
}

class OperationDetails extends Component {
	constructor(props) {
		super(props)
		this.state = {
			value: 0
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleChangeIndex = this.handleChangeIndex.bind(this)
		this.onBackClick = this.onBackClick.bind(this)
	}

	handleChange(_, value) {
		this.setState({value})
	}

	handleChangeIndex(index) {
		this.setState({value: index})
	}

	onBackClick() {
		this.props.history.goBack()
	}

	render() {
		const operation = this.props.operation
		return (
			<div>
				<DateHeader
					title={operation.patientName}
					date={moment(operation.operatingDate)}
					leftButtonIcon={<ArrowBack />}
					onLeftButtonClick={this.onBackClick}					
					dateEditable={false}
				/>
				<AppBar 
					position="fixed" 
					color="default" 
					className="AppBar-offset"
					style={{zIndex: 10}}
				>
					<Tabs value={this.state.value}
						onChange={this.handleChange}
						indicatorColor="primary"
						textColor="primary"
						scrollable
						scrollButtons="on"
					>
						{tabContent(operation).tabs.map((tab, tIndex) => {
							return <Tab label={tab.name} key={tIndex} />
						})}
					</Tabs>
				</AppBar>
				<SwipeableViews 
					style={{height: '100vh'}}
					index={this.state.value} 
					onChangeIndex={this.handleChangeIndex}
					animateTransitions={false}
					disableLazyLoading={true}>
					{tabContent(operation).tabs.map((tab, tIndex) =>
						tIndex === this.state.value ?
							<TabContainer key={tIndex}>
								<div className="Tabs-offset">
									{tab.fields}
								</div>
							</TabContainer> : <div key={tIndex}></div>)}
				</SwipeableViews>
			</div>
		)
	}
}

export default OperationDetails