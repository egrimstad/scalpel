import React, { Component } from 'react'
import Grid from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List'

const fields1 = ([
	['Anest.kode på program', 'anesthesiaCode'],
	['Tilleggsinfo', 'anesthesiaCodeComment'],
	['Premedikasjon', 'premedication'],
	['Prepol dato', 'propolDate'],
])

const fields2 = ([
	['ASA', 'asa'],
	['Høyde (cm)', 'height'],
	['Vekt (kg)', 'weight'],
])

const fields3 = ([
	['Anestesitilsyn', 'Journaltilsyn uten pas. tilstede'],
	['Verifisert', 'Larsen, Tor']
])

const checkboxFields = ([
	['Screening utført', 'isScreeningCompleted'],
	['Epi. kat.', 'needsEpiduralAnesthetic'],
	['Art. kran.', 'needsArterialCatheter'],
	['CVK', 'needsCentralVenousCatheter']
])

class Anesthesia extends Component {

	constructor(props) {
		super(props)
		this.operation = props.operation
	}

	render() {
		return (
			<div>
				<Grid container>
					<Grid item>
						<h4>Anestesiologiske forhold</h4>
						<p>{this.operation['anesthesiaInformation']}</p>
					</Grid>
					<Grid item>
						{fields1.map((item, i) =>
							<ListItem key={i}>
								<ListItemText
									primary={this.operation[item[1]]}
									secondary={item[0]}
								/>
							</ListItem>)}
					</Grid>
					<Grid item>
						{checkboxFields.map((item, i) =>
							<ListItem key={i}>
								{item[0]}
								<ListItemSecondaryAction>
									<Checkbox
										checked={this.operation[item[1]]}
										tabIndex={-1}
										disabled
									/>
								</ListItemSecondaryAction>
							</ListItem>)}
					</Grid>
					<Grid item>
						{fields2.map((item, i) =>
							<ListItem key={i}>
								<ListItemText
									primary={this.operation[item[1]]}
									secondary={item[0]}
								/>
							</ListItem>)}
						<ListItem>
							<ListItemText
								primary={this.operation['weight']/((this.operation['height'])^2)}
								secondary='BMI'
							/>
						</ListItem>
					</Grid>
					<Grid item>
						<h4>Annet</h4>
						<p>{this.operation['otherInformation']}</p>
					</Grid>
					<Grid item>
						{fields3.map((item, i) =>
							<ListItem key={i}>
								<ListItemText
									primary={item[1]}
									secondary={item[0]}
								/>
							</ListItem>)}
					</Grid>
				</Grid>
			</div>)
	}
}

export default Anesthesia
