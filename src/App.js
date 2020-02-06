import React, { useState } from 'react';
import './App.css';
import io from "socket.io-client";
import Button from '@material-ui/core/Button';



const socket = io('http://localhost:4200')
socket.on('connect', () => console.log('[IO] Connect => A new connection has been established'))

function App() {
  const [color, setColor] = useState("white");
  var send = (color) => {
    console.log('send')
    socket.emit('change color', color)
  }
  return (
    <div style={{ textAlign: "center" }}>
        <button onClick={send}>Change Color</button>
        <Button variant="contained" color="primary">
          Olá Mundo
        </Button>

        <button id="blue" onClick={() => send('blue')}>Blue</button>
        <button id="red" onClick={() => send('red')}>Red</button>

      </div>
  );
}

export default App;
