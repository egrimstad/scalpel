import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

import IconButton from 'material-ui/IconButton'
import ArrowBack from 'material-ui-icons/ArrowBack'

import moment from 'moment'

class DetailsHeader extends Component {
	render() {
		const operation = this.props.operation
		return (
			<AppBar position="fixed">
				<Toolbar>
					<IconButton onClick={this.props.onBackClick} style={{color: '#fff'}}>
						<ArrowBack />
					</IconButton>
					<Typography color="inherit" noWrap style={{flex:1}}>
						{operation.patientName}
					</Typography>
					<Typography color="inherit" type="button">
						{moment(operation.operatingDate).format('DD. MMM')}
					</Typography>
				</Toolbar>
			</AppBar>
		)
	}
}

DetailsHeader.propTypes = {
	operation: PropTypes.object,
	onBackClick: PropTypes.func
}

export default DetailsHeader