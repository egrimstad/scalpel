import React, { Component } from 'react'
import Grid, {GridItem} from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import List, { ListItem, ListItemText } from 'material-ui/List'

class Operation extends Component {
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
						<ListItem>
							<ListItemText
								primary="Fra 14:00"
								secondary="Fastende"
							/>
						</ListItem>
						<ListItem>
							<ListItemText
								primary="Tor"
								secondary="Kirurg"
							/>
						</ListItem>
						<ListItem>
							<ListItemText
								primary="17min"
								secondary="Knivtid"
							/>
						</ListItem>
					</Grid>
					<Grid item>
						<ListItem>
							Skal ikke ha anestesitilsyn
							<Checkbox
								checked="False"
								tabIndex={-1}
								disabled
							/>
						</ListItem>
						<ListItem>
							Traume/Ulykke
							<Checkbox
								checked="False"
								tabIndex={-1}
								disabled
							/>
						</ListItem>
						<ListItem>
							Smittefare
							<Checkbox
								checked="False"
								tabIndex={-1}
								disabled
							/>
						</ListItem>
					</Grid>
					<Grid item>
						Verifisert
					</Grid>
					
				</Grid>
			</div>)
	}
}

export default Operation