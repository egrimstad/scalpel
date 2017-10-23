import React from 'react'
import List, { ListItem, ListItemText, ListItemSecondaryAction} from 'material-ui/List'
import Typography from 'material-ui/Typography'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { GridList, GridListTile } from 'material-ui/GridList'
import Divider from 'material-ui/Divider'
import './OperationDetails.css'

import OperationTimeline from './OperationTimeline'

import { Pencil, GreenBall } from 'assets/icons'

const topFields = ([
	['Dato', 'operatingDate'],
	['Inn', 'arrivalTime'],
])

const smallFields = ([
	['Tils', 'tils'],
	['Pri', 'priority'],
	['ASA', 'asa'],
	['Blod', 'bloodType'],
	['Alder', 'patientAge']
])

const mainFields = ([
	['Diagnose', 'procedureTypeFreeText'],
	['Inngrep', 'diagnoseTypeFreeText'],
	['Navn', 'patientName'],
	['Født', 'patientBirthDate'],
	['Enhet', 'careUnitName'],
	['Utstyr', 'equipment']
])

const styles = theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		background: theme.palette.background.paper,
	},
	gridList: {
		width: '100%',
		transform: 'translateZ(0)',
	}
})

const Overview = (props) => {
	const operation = props.operation

	const topContentFormatted = () => {
		return (
			<List> {smallFields.map((tuple, hIndex) =>
				<ListItem key={hIndex}>{tuple[0]}
					<ListItemSecondaryAction>{operation[tuple[1]] ? operation[tuple[1]] : '-'}</ListItemSecondaryAction>
				</ListItem>)}
			</List>
		)
	}

	const mainContentFormatted = () => {
		return (
			<List>
				{mainFields.map((tuple, i) =>
					<ListItem key={i}>
						<ListItemText
							primary={operation[tuple[1]] ? operation[tuple[1]] : '-'}
							secondary={tuple[0]}
						/>
					</ListItem>
				)}
				<ListItem>
					<ListItemText
						primary={operation['crew'] ? operation['crew'].map(crew => crew['initials']).join(', ') : '-'}
						secondary='Personell'
					/>
				</ListItem>
			</List>
		)
	}

	const iconDataFormatted = () => {
		return (
			<div style={{position: 'relative'}}>
				<img src={Pencil} style={{width:'-webkit-fill-available'}} alt='Status icon'/>
				<img src={GreenBall} alt='Status icon' style={{position: 'absolute', bottom: 0, right: 0}} />
			</div>
		)
	}

	const tileData = () => {
		return [
			{
				id: 0,
				cols: 0.5,
				rows: 3,
				content: iconDataFormatted()
			},
			{
				id: 1,
				cols: 1.5,
				rows: 3,
				content: topContentFormatted()
			},
			{
				id: 2,
				cols: 2,
				rows: 1,
				content: <OperationTimeline operation={operation} />,
			},
			{
				id: 3,
				cols: 2,
				rows: 6,
				content: mainContentFormatted()
			}
		]
	}
	const classes = props.classes

	return (
		<div>
			<div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
				{iconDataFormatted()}
				{smallFields.map((field, i) =>
					<div key={i} style={{margin: 10}} >
						<Typography type="body2">{field[0]}</Typography>
						<Typography>{operation[field[1]]}</Typography>
					</div>
				)}
			</div>
			<Divider className="OperationDetails-divider" />
			<OperationTimeline operation={operation} height={30} />
			<Divider className="OperationDetails-divider" />
			{mainContentFormatted()}
		</div>
	)
}

Overview.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Overview)