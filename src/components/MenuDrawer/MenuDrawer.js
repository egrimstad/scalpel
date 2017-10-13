import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'

import Button from 'material-ui/Button'
import Divider from 'material-ui/Divider'
import Avatar from 'material-ui/Avatar'
import FolderIcon from 'material-ui-icons/Folder'

import SettingsIcon from 'material-ui-icons/Settings'
import StopIcon from 'material-ui-icons/Stop'
import EventIcon from 'material-ui-icons/Event'
import SupervisorAccountIcon from 'material-ui-icons/SupervisorAccount'
import './MenuDrawer.css'
import TopBackground from './background.png'
import Logo from './logo.png'
import PlusIcon from 'material-ui-icons/Add'

class MenuDrawer extends Component {
	render() {
		return (
			<Drawer
				open={this.props.open}
				onRequestClose={this.props.onRequestClose}
			>
				<div onClick={this.props.onRequestClose}>
					<div id="top-content">
						<img id="drawer-top-background" alt="background" src={TopBackground} />
						<img id="drawer-logo" alt="logo" src={Logo} />
						<List dense id="account-name">
							<ListItem>
								<ListItemText primary="Olivia Heldens" secondary="cheyanne_hauck@hotmail.com" />
							</ListItem>
						</List>
					</div>
					<List id="testtest">
						<ListItem button>
							<ListItemIcon>
								<div style={{color: '#FC7777'}}>
									<StopIcon size={32}/>
								</div>
							</ListItemIcon>
							<ListItemText primary="Plan 1" />
						</ListItem>
						<ListItem button>
							<ListItemIcon>
								<div style={{color: '#9C639D'}}>
									<StopIcon size={32}/>
								</div>
							</ListItemIcon>
							<ListItemText primary="Plan 2" />
						</ListItem>
						<ListItem button>
							<ListItemIcon>
								<div style={{color: '#3B4EC2'}}>
									<StopIcon size={32}/>
								</div>
							</ListItemIcon>
							<ListItemText primary="Plan 3" />
						</ListItem>
						<ListItem button>
							<ListItemIcon>
								<PlusIcon/>
							</ListItemIcon>
							<ListItemText primary="Add a plan" />
						</ListItem>
						<Divider />
						<Link to="/">
							<ListItem button>
								<ListItemIcon>
									<SupervisorAccountIcon />
								</ListItemIcon>
								<ListItemText primary="Timeline" />
							</ListItem>
						</Link>
						<Link to="/patients">
							<ListItem button>
								<ListItemIcon>
									<EventIcon />
								</ListItemIcon>
								<ListItemText primary="Patients" />
							</ListItem>
						</Link>
						<Divider />
						<ListItem button>
							<ListItemIcon>
								<SettingsIcon />
							</ListItemIcon>
							<ListItemText primary="Settings" />
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