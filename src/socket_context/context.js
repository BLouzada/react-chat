import { createContext } from "react";
const SocketContext = createContext({
    userList: [],
    messages: []
});
export default SocketContext;