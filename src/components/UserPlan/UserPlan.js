import React, { Component } from 'react'
import PropTypes from 'prop-types'

import MainHeader from '../../containers/MainHeader'

class UserPlan extends Component {
	constructor(props) {
		super(props)

		this.container = null
	}
	render() {
		return (
			<div
				ref = {element => this.container = element}
			>
				<MainHeader
					onMenuClick={this.props.openMenu} 
				/>
			</div>
		)
	}
}

UserPlan.propTypes = {
	user: PropTypes.object,
	openMenu: PropTypes.func
}

export default UserPlan