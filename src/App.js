import React from 'react';
import './App.css';

import UserList from './UserList';
import MessageConsole from './MessageConsole'
import SocketProvider from "./socket_context";

function App() {
  return (
    <SocketProvider>
      <div style={{ textAlign: "center" }}>
        <MessageConsole></MessageConsole>
        <UserList></UserList>
      </div>
    </SocketProvider>
  );
}

export default App;
