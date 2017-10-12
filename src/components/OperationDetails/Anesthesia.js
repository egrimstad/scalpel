import React, { Component } from 'react'
import List, { ListItem } from 'material-ui/List'

class Anesthesia extends Component {

	constructor(props) {
		super(props)
		this.operation = props.operation
	}

	render() {
		return (<div>
			<List>
				<ListItem> Hei</ListItem>
				<ListItem> hhh </ListItem>
				<ListItem> fff </ListItem>
			</List>
		</div>)
	}
}

export default Anesthesia
