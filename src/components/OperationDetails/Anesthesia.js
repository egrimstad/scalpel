import React from 'react'
import Grid from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List'
import './OperationDetails.css'

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
]) //TODO

const checkboxFields = ([
	['Screening utført', 'isScreeningCompleted'],
	['Epi. kat.', 'needsEpiduralAnesthetic'],
	['Art. kran.', 'needsArterialCatheter'],
	['CVK', 'needsCentralVenousCatheter']
])

const Anesthesia = (props) => {
	return (
		<div>
			<Grid>
				<Grid>
					<h4>Anestesiologiske forhold</h4>
					<p>{props.operation['anesthesiaInformation'] ? props.operation['anesthesiaInformation'] : '-'}</p>
				</Grid>
				<Grid>
					{fields1.map((item, i) =>
						<ListItem key={i}>
							<ListItemText
								primary={props.operation[item[1]] ? props.operation[item[1]] : '-'}
								secondary={item[0]}
							/>
						</ListItem>)}
				</Grid>
				<Grid>
					{checkboxFields.map((item, i) =>
						<ListItem key={i}>
							{item[0]}
							<ListItemSecondaryAction>
								<Checkbox
									checked={props.operation[item[1]]}
									tabIndex={-1}
									disabled
								/>
							</ListItemSecondaryAction>
						</ListItem>)}
				</Grid>
				<Grid>
					{fields2.map((item, i) =>
						<ListItem key={i}>
							<ListItemText
								primary={props.operation[item[1]] ? props.operation[item[1]] : '-'}
								secondary={item[0]}
							/>
						</ListItem>)}
					<ListItem>
						<ListItemText
							primary={props.operation['weight'] && props.operation['height'] ? props.operation['weight']/((props.operation['height'])^2) : '-'}
							secondary='BMI'
						/>
					</ListItem>
				</Grid>
				<Grid>
					<h4>Annet</h4>
					<p>{props.operation['otherInformation'] ? props.operation['otherInformation'] : '-'}</p>
				</Grid>
				<Grid>
					{fields3.map((item, i) =>
						<ListItem key={i}>
							<ListItemText
								primary={item[1]}
								secondary={item[0]}
							/>
						</ListItem>)}
				</Grid>
			</Grid>
		</div>
	)
}

export default Anesthesia
