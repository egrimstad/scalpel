import React, { Component } from 'react'
import Drawer from 'material-ui/Drawer'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import isNil from 'lodash/isNil'
import TextField from 'material-ui/TextField'

import moment from 'moment'

import './OperationDrawer.css'

import { activePhase, nextPhase, lastOperationEventTime } from 'utils/operationUtils'

class OperationDrawer extends Component {
	constructor(props) {
		super(props)

		this.onEndPhase = this.onEndPhase.bind(this)
		this.onStartNextPhase = this.onStartNextPhase.bind(this)
		this.onTimeChange = this.onTimeChange.bind(this)
		this.resetState = this.resetState.bind(this)

		this.state = {
			time: moment(),
			isTimeValid: true
		}
	}

	resetState() {
		this.setState({time: moment()})
	}

	onStartNextPhase() {
		this.props.onStartNextPhase(this.props.operation.id, this.state.time)
		this.props.onRequestClose()
	}

	onEndPhase() {
		this.props.onEndPhase(this.props.operation.id, this.state.time)
		this.props.onRequestClose()
	}

	onTimeChange(target) {
		const min = lastOperationEventTime(this.props.operation)
		const max = moment().hours(16).minutes(10)
		const [hours, minutes] = target.value.split(':')
		let newTime = moment().clone(this.state.time)
			.startOf('day')
			.add(hours, 'hours')
			.add(minutes, 'minutes')
		
		this.setState({
			time: newTime,
			isTimeValid: newTime.isBetween(min, max)
		})
	}

	render () {
		const operation = this.props.operation
		if(!operation) return null

		const active = activePhase(operation)
		const next = nextPhase(operation)
		const hasActive = !isNil(active)
		const hasNext = !isNil(next)

		return (
			<Drawer
				open={this.props.open}
				anchor="bottom"
				onRequestClose={this.props.onRequestClose}
				SlideProps={{
					onExited: this.resetState
				}}
			>
				<div className="OperationDrawer-container">
					<Typography type="headline" style={{gridArea: 'details-header'}} >
						Detaljer
					</Typography>

					<div style={{gridArea: 'details'}}>
						<Typography type="body1">
							Pasient: {operation.patientName}
						</Typography>
						<Typography type="body1">
							{operation.diagnoseTypeFreeText}
						</Typography>
						<Typography type="body1">
							{operation.procedureTypeFreeText}
						</Typography>
					</div>

					<Button
						style={{gridArea: 'goto'}}
						dense
						raised
						onClick={() => this.props.redirect('/operations/' + operation.id)}
					>
						Flere detaljer
					</Button>

					<Typography type="headline" style={{gridArea: 'phase-header'}} >
						Endre faser
					</Typography>

					<Typography type="body2" style={{gridArea: 'phase-at'}} >
						klokken
					</Typography>
					
					<TextField
						style={{gridArea: 'phase-time'}}
						type="time"
						InputLabelProps={{ shrink: true }}
						value={this.state.time.format('HH:mm')}
						onChange={event => this.onTimeChange(event.target)}
					/>

					{hasActive && 
						<Button
							style={{gridArea: 'phase-primary'}}
							color="primary" 
							onClick={this.onEndPhase}
							disabled={!this.state.isTimeValid}
							raised
							dense
						>
							Avslutt {active.name}
						</Button> 
					}

					{hasActive && hasNext && 
						<Typography type="body2" style={{gridArea: 'phase-or'}}>
							eller
						</Typography>
					}
					
					{hasNext && 
						<Button
							style={{gridArea: hasActive ? 'phase-secondary' : 'phase-primary'}}
							dense
							color="primary"
							raised={!hasActive}
							onClick={this.onStartNextPhase}
							disabled={!this.state.isTimeValid}
						>
							Start {next.name}
						</Button>
					}
				</div>
			</Drawer>
		)
	}
}

export default OperationDrawer