import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import SocketContext from './socket_context/context'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '40%',
    margin: '0 auto',
    minWidth: '400px',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(10)
    }
  },
  m2: {
    margin: '2px'
  }
}));

function Login(props) {
  const { setNewUserRegister } = useContext(SocketContext);
  function enter(event) {
    event.preventDefault()
    setNewUserRegister(event.target.userName.value)
  }
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={3}>
      <form noValidate autoComplete="off" onSubmit={enter}>
        <h2>ReactChat</h2>
        <Box display="flex" justifyContent="center" alignItems="center">
          <TextField className={classes.m2} name="userName" id="username" label="username" />
          <Button className={classes.m2} type="submit" variant="contained" color="primary">
            Enter
          </Button>
        </Box>
      </form>
    </Paper>
  );
}

export default Login;
