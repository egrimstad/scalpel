import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import SettingsIcon from 'material-ui-icons/Settings'
import EventIcon from 'material-ui-icons/Event'
import SupervisorAccountIcon from 'material-ui-icons/SupervisorAccount'
import './MenuDrawer.css'

class MenuDrawer extends Component{
	render() {
		return (
			<Drawer 
				open={this.props.open}
				onRequestClose={this.props.onRequestClose}
			>
				<div onClick={this.props.onRequestClose}>
					<List>
						<Link to="/">
							<ListItem button>
								<ListItemIcon>
									<SupervisorAccountIcon />
								</ListItemIcon>
								<ListItemText primary="Timeline"/>
							</ListItem>
						</Link>
						<Link to="/patients">
							<ListItem button>
								<ListItemIcon>
									<EventIcon />
								</ListItemIcon>
								<ListItemText primary="Patients"/>
							</ListItem>
						</Link>
						<ListItem button>
							<ListItemIcon>
								<SettingsIcon />
							</ListItemIcon>
							<ListItemText primary="Settings"/>
						</ListItem>
					</List>
				</div>
			</Drawer>
		)
	}
}

MenuDrawer.propTypes = {
	open: PropTypes.bool,
	onRequestClose: PropTypes.func
}

export default MenuDrawer