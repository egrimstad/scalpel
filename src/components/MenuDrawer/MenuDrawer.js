import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'

import Divider from 'material-ui/Divider'

import SettingsIcon from 'material-ui-icons/Settings'
import StopIcon from 'material-ui-icons/Stop'
import ViewList from 'material-ui-icons/ViewList'
import ViewWeek from 'material-ui-icons/ViewWeek'
import './MenuDrawer.css'
import TopBackground from './background.png'
import Logo from './logo.png'

const menuOptions = [
	{
		text: 'Tidslinje',
		icon: <ViewWeek/>,
		link: '/'
	},
	{
		text: 'Listevisning',
		icon: <ViewList/>,
		link: '/operations'
	}
	]

const plans = [
	{
		name: 'Plan 1',
		color: '#FC7777'
	},
	{
		name: 'Plan 2',
		color: '#9C639D'
	},
	{
		name: 'Plan 3',
		color: '#3B4EC2'
	}
]


class MenuDrawer extends Component {
	render() {
		return (
			<Drawer
				open={this.props.open}
				onRequestClose={this.props.onRequestClose}
			>
				<div onClick={this.props.onRequestClose}>
					<div id="top-content">
						<img id="drawer-top-background" alt="background" src={TopBackground}/>
						<img id="drawer-logo" alt="logo" src={Logo}/>
						<List dense id="account-name">
							<ListItem>
								<ListItemText primary="Olivia Heldens" secondary="cheyanne_hauck@hotmail.com"/>
							</ListItem>
						</List>
					</div>
					<List id="testtest">
						{plans.map((plan, index) =>
							<ListItem button key={index}>
								<ListItemIcon>
									<div style={{color: plan.color}}>
										<StopIcon size={32}/>
									</div>
								</ListItemIcon>
								<ListItemText primary={plan.name}/>
							</ListItem>
						)}
						<Divider />
						{menuOptions.map((item, index) =>
							<Link to={item.link} key={index}>
								<ListItem button>
									<ListItemIcon>
										{item.icon}
									</ListItemIcon>
									<ListItemText primary={item.text}/>
								</ListItem>
							</Link>
						)}
						<Divider />
						<ListItem button>
							<ListItemIcon>
								<SettingsIcon />
							</ListItemIcon>
							<ListItemText primary="Instillinger"/>
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