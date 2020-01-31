import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import socketIOClient from 'socket.io-client'

function App() {
  const [endpoint, setEndpoint] = useState("localhost:4200");
  const [color, setColor] = useState("white");
  const socket = socketIOClient(endpoint);
  var send = () => {
    const socket = socketIOClient(endpoint);
    socket.emit('change color', color) // change 'red' to this.state.color
  }
  var componentDidMount = () => {
    const socket = socketIOClient(endpoint);
    setInterval(send(), 1000)
    socket.on('change color', (col) => {
        document.body.style.backgroundColor = col
    })
}
  return (
    <div style={{ textAlign: "center" }}>
        <button onClick={() => send() }>Change Color</button>



        <button id="blue" onClick={() => setColor('blue')}>Blue</button>
        <button id="red" onClick={() => setColor('red')}>Red</button>

      </div>
  );
}

export default App;
