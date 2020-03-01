import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SocketContext from './socket_context/context'

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));

function MessageConsole(props) {
  const {changeColor} = useContext(SocketContext);
    function send (event) {
        event.preventDefault()
        console.log('submeteu')
        changeColor('newColor')
      }
    const classes = useStyles();
    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={send}>
          <TextField id="standard-basic" label="Standard" />
          <Button type="submit" variant="contained" color="primary">
            Enviar
        </Button>
        </form>
      );
}

export default MessageConsole;
