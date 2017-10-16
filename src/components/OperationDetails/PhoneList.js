import React, { Component } from 'react'
import List, { ListItem, ListItemSecondaryAction} from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import Phone from 'material-ui-icons/Phone'

class Staff extends Component {
	constructor(props) {
		super(props)
		this.operation = props.operation
	}

	render() {
		return (
			<div>
				<List>
					{this.operation['crew'].map((person, index) =>
						<ListItem key={index}> {person['fullName']}
							<ListItemSecondaryAction>
								<IconButton aria-label='Call' href={'tel:' + person['phone']}>
									<Phone />
								</IconButton>
							</ListItemSecondaryAction>
						</ListItem>
					)}
				</List>
			</div>)
	}
}

export default Staff