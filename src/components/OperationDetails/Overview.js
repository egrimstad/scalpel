import React, { Component } from 'react'
import List, { ListItem, ListItemText} from 'material-ui/List'
import Typography from 'material-ui/Typography'
import PropTypes from 'prop-types'
import Divider from 'material-ui/Divider'
import './OperationDetails.css'
import OperationTimeline from './OperationTimeline'

import OperationDrawer from '../OperationDrawer/OperationDrawer'

import { Pencil, GreenBall } from 'assets/icons'

import moment from 'moment'

const topFields = ([
	{
		label: 'Diagnose',
		key: 'procedureTypeFreeText',
		format: procedure => procedure || '-'
	},
	{
		label: 'Inngrep',
		key: 'diagnoseTypeFreeText',
		format: diagnosis => diagnosis || '-'
	}
])

const smallFields = ([
	['Alder', 'patientAge'],
	['Tils', 'tils'],
	['Pri', 'priority'],
	['ASA', 'asa'],
	['Blod', 'bloodType'],
])

const mainFields = ([
	{
		label: 'Navn',
		key: 'patientName',
		format: name => name || '-'
	},
	{
		label: 'Født',
		key: 'patientBirthDate',
		format: date => {
			if(!date) return '-'
			return moment(date).format('DD/MM/YY')
		}
	},
	{
		label: 'Enhet',
		key: 'careUnitName',
		format: unit => unit || '-'
	},
	{
		label: 'Utstyr',
		key: 'careUnitName',
		format: name => name || '-'
	},
	{
		label: 'Personell',
		key: 'crew',
		format: crew => {
			if(!crew) return '-'
			return crew.map(person => person['initials']).join(', ')
		}
	}
])

const topContentFormatted = operation => {
	return (
		<List>
			{topFields.map((field, i) => {
				return (
					<ListItem key={i}>
						<ListItemText
							primary={field.format(operation[field.key])}
							secondary={field.label}
						/>
					</ListItem>
				)
			})}
		</List>
	)
}

const mainContentFormatted = operation => {
	return (
		<List dense>
			{mainFields.map((field, i) =>
				<ListItem key={i}>
					<ListItemText
						primary={field.format(operation[field.key])}
						secondary={field.label}
					/>
				</ListItem>
			)}
		</List>
	)
}

const iconDataFormatted = operation => {
	return (
		<div style={{position: 'relative', margin: '10px'}}>
			<img src={Pencil} style={{width:'-webkit-fill-available'}} alt='Status icon'/>
			<img src={GreenBall} alt='Status icon' style={{position: 'absolute', bottom: 0, right: 0}} />
		</div>
	)
}

class Overview extends Component {
	constructor(props) {
		super(props)

		this.state = {
			phaseDrawerOpen: false
		}

		this.phaseDrawerOpen = this.phaseDrawerOpen.bind(this)
		this.phaseDrawerClose = this.phaseDrawerClose.bind(this)
	}

	phaseDrawerOpen() {
		this.setState({phaseDrawerOpen: true})
	}

	phaseDrawerClose() {
		this.setState({phaseDrawerOpen: false})
	}

	render() {
		const operation = this.props.operation
		return (
			<div>
				<div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
					{iconDataFormatted(operation)}
					{smallFields.map((field, i) =>
						<div key={i} style={{margin: 10}} >
							<Typography type="body2">{field[0]}</Typography>
							<Typography>{operation[field[1]]}</Typography>
						</div>
					)}
				</div>
				<Divider className="OperationDetails-divider" />
				<OperationTimeline 
					height={50} 
					operation={operation}
					onClick={this.phaseDrawerOpen} />
				<OperationDrawer 
					operation={operation} 
					open={this.state.phaseDrawerOpen}
					onRequestClose={this.phaseDrawerClose} />
				<Divider className="OperationDetails-divider" />
				{topContentFormatted(operation)}
				<Divider className="OperationDetails-divider" />
				{mainContentFormatted(operation)}
			</div>
		)
	}
}

Overview.propTypes = {
	operation: PropTypes.object
}

export default Overview