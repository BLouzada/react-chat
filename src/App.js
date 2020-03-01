import React, { useContext } from 'react';
import Box from '@material-ui/core/Box';
import './App.css';

import UserList from './UserList';
import MessageConsole from './MessageConsole'
import Login from './Login'
import SocketContext from './socket_context/context'

function App() {
  const {isCurrentUserOnline} = useContext(SocketContext);

  return (
    <Box align-self="center" display="flex" justifyContent="center" alignItems="center">
      {!isCurrentUserOnline && <Login></Login>}
      {isCurrentUserOnline &&
        <div>
          <MessageConsole></MessageConsole>
          <UserList></UserList>
        </div>
      }
    </Box>
  );
}

export default App;
