import React from 'react'
import List, { ListItem, ListItemSecondaryAction} from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import Phone from 'material-ui-icons/Phone'

const Staff = (props) => {
	return (
		<div>
			<List>
				{props.operation['crew'] ? props.operation['crew'].map((person, index) =>
					<ListItem key={index}> {person['fullName']}
						<ListItemSecondaryAction>
							<IconButton aria-label='Call' href={'tel:' + person['phone']}>
								<Phone />
							</IconButton>
						</ListItemSecondaryAction>
					</ListItem>
				) : 'Ingen personell er registrert'}
			</List>
		</div>)
}

export default Staff