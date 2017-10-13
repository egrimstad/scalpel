import React, { Component } from 'react'
import List, { ListItem, ListItemText } from 'material-ui/List'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { GridList, GridListTile } from 'material-ui/GridList'


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

class Overview extends Component {
	constructor(props) {
		super(props)
		this.operation = props.operation
	}

	getMainHeaders() {return ['Diagnose', 'Inngrep', 'Navn', 'Født', 'Enhet', 'Personell', 'Utstyr']}
	getMainData() {return [this.operation['ProcedureTypeFreeText'], this.operation['DiagnoseTypeFreeText'], this.operation['PatientName'], this.operation['PatientBirthDate'], this.operation['CareUnitName'], this.operation['Crew'].map(crew => crew['Initials']), 'Utstyr ..']}
	getTopHeaders() {return ['Dato', 'Inn', 'Tils', 'Pri', 'ASA', 'Blod']}
	getTopData() {return [this.operation['OperatingDate'], this.operation['ArrivalTime'], this.operation['PreVisitStatus'], this.operation['Priority'], this.operation['AsaScore'], this.operation['NumberOfBloodUnits']]}

	getTopContentFormatted() {
		return (
			<GridList cellHeight={300} spacing={1}>
				<GridListTile cols={1} rows={1}>
					<List> {this.getTopHeaders().map((header, hIndex) => <ListItem key={hIndex}>{header}</ListItem>)}</List>
				</GridListTile>
				<GridListTile cols={1} rows={1}>
					<List> {this.getTopData().map((data, dIndex) => <ListItem key={dIndex}>{data}</ListItem>)}</List>
				</GridListTile>
			</GridList>)
	}

	getMainContentFormatted() {
		return (
			<List>
				{this.getMainHeaders().map((header, i) =>
					<ListItem key={i}>
						<ListItemText
							primary={this.getMainData()[i]}
							secondary={header}
						/>
					</ListItem>
				)}
			</List>
		)
	}

	getIconDataFormatted() {
		return (
			<div>
				<img src='../../../icons/pencil.png' height='100px' alt='Status icon' />
				<img src='../../../icons/bullet_ball_green.png' alt='Status icon' />
			</div>
		)
	}


	getTileData() {
		return [
			{
				id: 0,
				cols: 0.5,
				rows: 3,
				content: this.getIconDataFormatted()
			},
			{
				id: 1,
				cols: 1.5,
				rows: 3,
				content: this.getTopContentFormatted()
			},
			{
				id: 2,
				cols: 2,
				rows: 1,
				content: <div>Timeline</div>
			},
			{
				id: 3,
				cols: 2,
				rows: 6,
				content: this.getMainContentFormatted()
			}
		]
	}

	render() {
		const classes = this.props.classes
		return (<div className={classes.root}>
			<GridList cellHeight={100} spacing={1} className={classes.gridList}>
				{this.getTileData().map(tile => (
					<GridListTile key={tile.id} cols={tile.cols} rows={tile.rows} children={tile.content}>
					</GridListTile>
				))}
			</GridList>
		</div>)
	}
}

Overview.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Overview)