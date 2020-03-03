import React, { useContext } from 'react';
import Box from '@material-ui/core/Box';
import './App.css';

import UserList from './UserList';
import ChatMessages from './ChatMessages';
import MessageConsole from './MessageConsole'
import Login from './Login'
import SocketContext from './socket_context/context'
import SocketProvider from "./socket_context";
import { socket } from './sockets/index';

function App() {
  const {isCurrentUserOnline} = useContext(SocketContext);

  return (
    <Box align-self="center" display="flex" justifyContent="center" alignItems="center">
      {!isCurrentUserOnline && <Login></Login>}
      {isCurrentUserOnline &&
        <div>
          <MessageConsole socket={socket}></MessageConsole>
          <UserList></UserList>
        </div>
      }
    </Box>
  );
}

export default App;
