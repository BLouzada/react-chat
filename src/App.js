import React, { useState } from 'react';
import './App.css';
import io from "socket.io-client";

import UserList from'./UserList';
import MessageConsole from './MessageConsole'
const socket = io('http://localhost:4200')
socket.on('connect', () => console.log('[IO] Connect => A new connection has been established'))

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <MessageConsole socket={socket}></MessageConsole>
      <UserList socket={socket}></UserList>
    </div>
  );
}

export default App;
