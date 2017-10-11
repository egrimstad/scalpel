import React, { Component } from 'react'
import Grid, {GridItem} from 'material-ui/List'

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
						<h1>Another sample</h1>
						<p>Asoisdjf oij iwjoij oifwej.. </p>
					</Grid>
					<Grid item>
					
					</Grid>
					
				</Grid>
			</div>)
	}
}

export default Operation