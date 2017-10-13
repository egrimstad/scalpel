import React, { Component } from 'react'
import Grid from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List'

class Operation extends Component {

	constructor(props) {
		super(props)
		this.operation = props.operation
	}

	getLongFields() {
		return ([
			['Beskjed til operasjonsstue', this.operation['MessageFromBedWard']],
			['Medisinsk informasjon', 'DETTE ER TEKST 1\r\nDETTE ER TELST 2\r\n']
		])
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
			['Smittefare', this.operation['IsContaminationDanger']],
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
					{this.getLongFields().map((item, i) =>
						<Grid item key={i}>
							<h4>{item[0]}</h4>
							<p>{item[1]}</p>
						</Grid>)}
					<Grid item>
						{this.getShortFields().map((item,i) =>
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