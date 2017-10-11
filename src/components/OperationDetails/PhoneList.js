import React, { Component } from 'react'
import List, { ListItem, ListItemSecondaryAction} from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import Phone from 'material-ui-icons/Phone'

class PhoneList extends Component {

	render() {
		return (<div>
			<List>
				<ListItem> Hei
					<ListItemSecondaryAction>
						<IconButton aria-label="Call" href="tel:+4712345678">
							<Phone />
						</IconButton>
					</ListItemSecondaryAction>
				</ListItem>
				<ListItem> hhh
					<ListItemSecondaryAction>
						<IconButton aria-label="Call" href="tel:+4712345678">
							<Phone />
						</IconButton>
					</ListItemSecondaryAction></ListItem>
				<ListItem> fff
					<ListItemSecondaryAction>
						<IconButton aria-label="Call" href="tel:+4712345678">
							<Phone />
						</IconButton>
					</ListItemSecondaryAction></ListItem>
			</List>
			  </div>)
	}
}

export default PhoneList