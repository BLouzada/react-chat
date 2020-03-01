import React, { useState, useEffect } from "react";
import SocketContext from "./context";
import { initSockets, changeColor, registerUser } from "../sockets";

const SocketProvider = (props) => {
  const [value, setValue] = useState({
    userList: [],
    isCurrentUserOnline: false,
    changeColor: props => { changeColor(props) },
    setNewUserRegister: props => { registerUser(props) },
  });
  useEffect(() => initSockets({ setValue }), []);

  return (
    <SocketContext.Provider value={value}>
      {props.children}
    </SocketContext.Provider>
  )
}; export default SocketProvider;