import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import Tabs, { Tab } from 'material-ui/Tabs'
import SwipeableViews from 'react-swipeable-views'
import PhoneList from './PhoneList'
import Overview from './Overview'
import Operation from './Operation'
import Anesthesia from './Anesthesia'
import './OperationDetails.css'

import DetailsHeader from '../Header/DetailsHeader'

const tabContent = operation => [
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

class OperationDetails extends Component {
	constructor(props) {
		super(props)
		this.state = {
			currentTab: 0
		}

		this.onChangeTab = this.onChangeTab.bind(this)
		this.onBackClick = this.onBackClick.bind(this)
	}

	onChangeTab(tabIndex) {
		this.setState({currentTab: tabIndex})
	}

	onBackClick() {
		this.props.history.goBack()
	}

	render() {
		const operation = this.props.operation
		return (
			<div>
				<DetailsHeader
					operation={operation}
					onBackClick={this.onBackClick}
				/>
				<AppBar 
					position="fixed" 
					color="default" 
					className="AppBar-offset"
					style={{zIndex: 10}}
				>
					<Tabs value={this.state.currentTab}
						onChange={(_, tabIndex) => this.onChangeTab(tabIndex)}
						indicatorColor="primary"
						textColor="primary"
						scrollable
						scrollButtons="on"
					>
						{tabContent(operation).map((tab, i) => <Tab label={tab.name} key={i} />)}
					</Tabs>
				</AppBar>
				<SwipeableViews 
					style={{height: '100vh'}}
					index={this.state.currentTab} 
					onChangeIndex={this.onChangeTab}
					disableLazyLoading={true}>
					{tabContent(operation).map((tab, i) =>
						<div 
							key={i} 
							style={{ padding: 10, paddingTop:0 }}
							className="Tabs-offset"
						>
							{this.state.currentTab === i ? tab.fields : null}
						</div>
					)}
				</SwipeableViews>
			</div>
		)
	}
}

export default OperationDetails