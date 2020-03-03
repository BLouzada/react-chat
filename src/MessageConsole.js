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
  const message = useFormInput("")

  function send(event) {
    event.preventDefault()
    if (!message.input.value || message.input.value === "" ) {
      alert("Cannot send empty message")
      return;
    }
    console.log('event send.message', message.input.value)
    props.socket.emit('send.message', message.input.value)
    message.setValue("")
  }

  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={send}>
      <TextField id="standard-basic" label="Type some message here" {... message.input} />
      <Button type="submit" variant="contained" color="primary">
        Send
      </Button>
    </form>
  );
}

function useFormInput(initialValue) {
  const [formValue, setFormValue] = useState(initialValue)
  
  function handleFormValueChange(e) {
    setFormValue(e.target.value)
  }

  return {
    setValue: setFormValue,
    input: {
      value: formValue,
      onChange: handleFormValueChange
    }
  }
}

export default MessageConsole;
