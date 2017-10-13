import React from 'react'
import Dialog, { DialogActions, DialogTitle } from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import ScheduleIcon from 'material-ui-icons/Schedule'

import './PhaseDialog.css'

class PhaseDialog extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			time: props.time
		}

		this.handleRequestClose = this.handleRequestClose.bind(this)
		this.handleEndPhaseClick = this.handleEndPhaseClick.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleRequestClose() {
		this.setState({time: this.props.time})
		this.props.onRequestClose(this.props.time)
	}

	handleEndPhaseClick() {
		this.props.onRequestClose(this.state.time)
	}

	handleChange(event) {
		this.setState({
			time: event.target.value,
		})
	}

	render() {
		const { onRequestClose, time, title, ...other } = this.props

		return (
			<Dialog onRequestClose={this.handleRequestClose} {...other}>
				<DialogTitle>{this.props.title}</DialogTitle>

				<form style={{display: 'flex', flexWrap: 'wrap', margin: 'auto', marginTop: 15}}>
					<ScheduleIcon style={{marginRight: 15, marginTop: 5}}/>
					<TextField
						id="time"
						//label="End time"
						type="time"
						defaultValue={this.state.time}
						InputLabelProps={{
							shrink: true,
						}}
						inputProps={{
							step: 300, // 5 min
						}}
						onChange={event => this.handleChange(event)}
					/>
				</form>

				<DialogActions /*style={{overflow: 'hidden', whiteSpace: 'nowrap'}} // The style makes the buttons single line, but does not scale well*/>
					<Button color="primary" className="btn-small" style={{marginRight: 30}}>
						<p>START NEW PHASE</p>
					</Button>
					<Button color="primary" onClick={this.handleRequestClose}>
							CANCEL
					</Button>
					<Button color="primary" onClick={this.handleEndPhaseClick}>
							END PHASE
					</Button>
				</DialogActions>
			</Dialog>
		)
	}
}

export default PhaseDialog