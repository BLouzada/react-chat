import React from 'react';
import './App.css';

import UserList from './UserList';
import ChatMessages from './ChatMessages';
import MessageConsole from './MessageConsole'
import SocketProvider from "./socket_context";
import { socket } from './sockets/index';

function App() {
  return (
    <SocketProvider>
      <div style={{ textAlign: "center" }}>
        <ChatMessages></ChatMessages>
        <MessageConsole socket={socket}></MessageConsole>
        <UserList></UserList>
      </div>
    </SocketProvider>
  );
}

export default App;
