import React, { Component } from 'react'
import Grid from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import { ListItem, ListItemText } from 'material-ui/List'

class Operation extends Component {

	constructor(props) {
		super(props)
		this.operation = props.operation
	}

	getShortFields() {
		return ([
			['Fastende', 'Fra kl 14'],
			['Knivtid', this.operation['SurgeonTime']],
			['Kirurg', 'LSL'],
			['1. Assistent', 'EV'],
			['2. Assistent', 'TDR'],
			['Leie', 'Sideleie'],
			['Blod', this.operation['NumberOfBloodUnits']],
			['Anest. kode', this.operation['AnesthesiaCodeName']],
			['ASA', this.operation['AsaScore']]
		])
	}

	getCheckboxFields() {
		return ([
			['Skal ikke ha anestesitilsyn', false],
			['Tramue/Ulykke', false],
			['Tromboseprofylakse', false],
			['Smittefare', true],
			['Intensivplass', false],
			['AB-profylakse', false],
			['Overvåking', true]
		])
	}


	/* Something like this for getting data??

	getData(operationId, dataType) {
		return DataComponent.getOperationData(operationId, dataType)
	}
	getFields() {
		return [{'Beskjed til operasjonsstue': getData("something")}, 'Medisinsk informasjon', 'Fastende']
	}
	*/

	render() {
		return (
			<div>
				<Grid container>
					<Grid item>
						<h1>Beskjed til operasjonsstue</h1>
						<p>Actual message.. Blabal.</p>
					</Grid>
					<Grid item>
						<h1>Medisinsk informasjon</h1>
						<p>Asoisdjf oij iwjoij oifwej.. </p>
					</Grid>
					<Grid item>
						{this.getShortFields().map(item =>
							<ListItem>
								<ListItemText
									primary={item[1]}
									secondary={item[0]}
								/>
							</ListItem>)}
					</Grid>
					<Grid item>
						{this.getCheckboxFields().map(item =>
							<ListItem>
								{item[0]}
								<Checkbox
									checked={item[1]}
									tabIndex={-1}
									disabled
								/>
							</ListItem>)}
					</Grid>
					<Grid item>
						<ListItem>
							<ListItemText
								primary='-'
								secondary='Verifisert'
							/>
						</ListItem>
					</Grid>
					
				</Grid>
			</div>)
	}
}

export default Operation