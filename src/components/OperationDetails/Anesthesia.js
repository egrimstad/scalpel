import React, { Component } from 'react'
import Grid from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List'

class Anesthesia extends Component {

	constructor(props) {
		super(props)
		this.operation = props.operation
	}

	getLongFields() {
		return ([
			['Anestesiologiske forhold', 'Ikke info om symptomer i det siste, normal EKG og klinisk noe ved innkomst. '],
			['Annet', 'Dette er en tekst. ']
		])
	}

	getField1() {
		return ([
			['Anest.kode på program', this.operation['AnesthesiaCodeName']],
			['Tilleggsinfo', 'Fått fem.blokk 9/9 kl. 21.20'],
			['Premedikasjon', 'Paracet 1,5g. Dexametason 12 mg'],
			['Prepol dato', this.operation['PrePolyclinicDate']],
		])
	}

	getField2() {
		return ([
			['ASA', this.operation['AsaScore']],
			['Høyde (cm)', '169'], 
			['Vekt (kg)', '75'],
			['BMI', '26']
		])
	}
	
	getField3() {
		return ([
			['Anestesitilsyn', 'Journaltilsyn uten pas. tilstede'],
			['Verifisert', 'Larsen, Tor']
		])
	}

	getCheckboxFields() {
		return ([
			['Screening utført', false], 
			['Epi. kat.', false], 
			['Art. kran.', true], 
			['CVK', false]
		])
	}

	render() {
		return (
			<div>
				<Grid container>
					<Grid item>
						<h4>{'Anestesiologiske forhold'}</h4>
						<p>{'Ikke info om symptomer i det siste, normal EKG og klinisk noe ved ankomst.'}</p> 
					</Grid>
					<Grid item>
						{this.getField1().map((item,i) =>
							<ListItem key={i}>
								<ListItemText
									primary={item[1]}
									secondary={item[0]}
								/>
							</ListItem>)}
					</Grid>
					<Grid item>
						{this.getCheckboxFields().map((item, i) =>
							<ListItem key={i}>
								{item[0]}
								<ListItemSecondaryAction>
									<Checkbox
										checked={item[1]}
										tabIndex={-1}
										disabled
									/>
								</ListItemSecondaryAction>
							</ListItem>)}
					</Grid>
					<Grid item>
						{this.getField2().map((item,i) =>
							<ListItem key={i}>
								<ListItemText
									primary={item[1]}
									secondary={item[0]}
								/>
							</ListItem>)}
					</Grid>
					<Grid item>
						<h4>{'Annet'}</h4>
						<p>{'Tekst her.'}</p> 
					</Grid>
					<Grid item>
						{this.getField3().map((item,i) =>
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
