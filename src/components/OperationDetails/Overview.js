import React, { Component } from 'react'
import List, { ListItem, ListItemText } from 'material-ui/List'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile } from 'material-ui/GridList';

const mainHeaders = ['Diagnose', 'Inngrep', 'Navn', 'Født', 'Enhet', 'Personell', 'Utstyr']
const mainData = ['Syk', 'Kutt', 'Jenny', '16.03.95', 'NTNU', 'HDY, DFDF, LLLF, FNE', 'Scalpel']
const topHeaders = ['Date', 'Inn', 'Tils', 'Pri', 'ASA', 'Blood']
const topData = []

const topHeadersFormatted = (<List> {topHeaders.map(header => <ListItem>{header}</ListItem>)}</List>)
const topDataFormatted = (<List> {topHeaders.map(header => <ListItem>{header}</ListItem>)}</List>)
const topContentFormatted = (
	<GridList cellHeight={300} spacing={1}>
		<GridListTile cols={1} rows={1} children={topHeadersFormatted}>
		</GridListTile>
		<GridListTile cols={1} rows={1} children={topDataFormatted}>
		</GridListTile>
	</GridList>)

const mainContentFormatted = (
	<List>
		{mainHeaders.map((header, i) =>
		<ListItem>
			<ListItemText
				primary={mainData[i]}
				secondary={header}
			/>
		</ListItem>
	)}
	</List>
)

const tileData = [
	{
		id: 0,
		cols: 1,
		rows: 3,
		content: <div>Icons</div>
	},
	{
		id: 1,
		cols: 1,
		rows: 3,
		content: topContentFormatted
	},
	{
		id: 2,
		cols: 2,
		rows: 1,
		content: <div>Timeline</div>
	},
	{
		id: 3,
		cols: 2,
		rows: 6,
		content: mainContentFormatted
	}
]

const styles = theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		background: theme.palette.background.paper,
	},
	gridList: {
		width: '100%',
		height: 500,
		// Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
		transform: 'translateZ(0)',
	},
	titleBar: {
		background: 'black'
	},
});

class Overview extends Component {

	render() {
		const classes = this.props.classes;
		return (<div className={classes.root}>
			<GridList cellHeight={100} spacing={1} className={classes.gridList}>
				{tileData.map(tile => (
					<GridListTile key={tile.id} cols={tile.cols} rows={tile.rows}
								  children={tile.content?tile.content:tile.title}>
					</GridListTile>
				))}
			</GridList>
		</div>)
	}
}

Overview.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Overview);