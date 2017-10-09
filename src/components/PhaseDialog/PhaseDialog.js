import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Avatar from 'material-ui/Avatar'
import List, { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List'
import Dialog, { DialogActions, DialogTitle } from 'material-ui/Dialog'
import PersonIcon from 'material-ui-icons/Person'
import AddIcon from 'material-ui-icons/Add'
import blue from 'material-ui/colors/blue'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button';

const emails = ['username@gmail.com', 'user02@gmail.com'];
const styles = {
  avatar: {
    background: blue[100],
    color: blue[600],
  },
};

class SimpleDialog extends React.Component {
  handleRequestClose = () => {
    this.props.onRequestClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onRequestClose(value);
  };

  handleEndPhaseClick = value => {
	  //this.props.onRequestClose(value)
	  console.log(value)
  }

  render() {
    const { classes, onRequestClose, selectedValue, ...other } = this.props;

    return (
      <Dialog onRequestClose={this.handleRequestClose} {...other}>
        <DialogTitle>Phase dialog</DialogTitle>
			<TextField
				id="time"
				label="Alarm clock"
				type="time"
				defaultValue="08:00"
				className={classes.textField}
				InputLabelProps={{
				shrink: true,
				}}
				inputProps={{
				step: 300, // 5 min
				}}
			/>
          	<List>
            {emails.map(email => (
              <ListItem button onClick={() => this.handleListItemClick(email)} key={email}>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={email} />
              </ListItem>
            ))}
            <ListItem button onClick={() => this.handleListItemClick('addAccount')}>
              <ListItemAvatar>
                <Avatar>
                  <AddIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="add account" />
            </ListItem>
          </List>
		  <DialogActions>
		  	<Button color="primary">
       			START NEW PHASE
      		</Button>
		  	<Button color="primary" onClick={this.handleRequestClose}>
       			CANCEL
      		</Button>
		  	<Button color="primary">
       			END PHASE
      		</Button>
		</DialogActions>
      </Dialog>
    );
  }
}

SimpleDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

const PhaseDialog = withStyles(styles)(SimpleDialog);

export default PhaseDialog;