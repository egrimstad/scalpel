import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Tabs, { Tab } from 'material-ui/Tabs'
import data from './../../data'
import List, { ListItem, ListItemText } from 'material-ui/List'
import SwipeableViews from 'react-swipeable-views'
import { Link } from 'react-router-dom'

function TabContainer(props) {
	return <div style={{ padding: 20 }}>{props.children}</div>
}

TabContainer.propTypes = {
	children: PropTypes.node.isRequired
}

const styles = theme => ({
	root: {
		flexGrow: 1,
		width: '100%',
		marginTop: 0,
		backgroundColor: theme.palette.background.paper,
	}
})

class ListView extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			value: 0
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleChangeIndex = this.handleChangeIndex.bind(this)
	}

	handleChange(_, value) {
		this.setState({value})
	}

	handleChangeIndex(index) {
		this.setState({value: index})
	}

	render() {
		const { classes } = this.props
		return (
			<div className={classes.root}>
				<AppBar position="static" color="default">
					<Tabs
						value={this.state.value}
						onChange={this.handleChange}
						indicatorColor="primary"
						textColor="primary"
						scrollable
						scrollButtons="auto"
					>
						{data.theaters.map((theatre, tIndex) => {
							return <Tab label={theatre.name} key={tIndex}/>
						})}
					</Tabs>
				</AppBar>
				<SwipeableViews index={this.state.value} onChangeIndex={this.handleChangeIndex}>
					{data.theaters.map((theatre, tIndex) =>
						tIndex === this.state.value ?
							<TabContainer key={tIndex}>
								<List>
									{theatre.operations.map((operation, oIndex) =>
										<div key={oIndex}>
											<Link to={"/operationDetails/"+operation.id}
												  query={{operationId: operation.id}}>
												<ListItem button>
													<img src='../../../icons/pencil.png' height="20px"
														 alt="Status icon"/>
													<img src='../../../icons/bullet_ball_green.png' alt="Status icon"/>
													<ListItemText primary={operation.patient}/>
												</ListItem>
											</Link>
										</div>
									)}
								</List>
							</TabContainer> : <div key={tIndex}></div>)}
				</SwipeableViews>
			</div>
		)
	}
}

ListView.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ListView)