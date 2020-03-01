import { createContext } from "react"; 
const SocketContext = createContext({
    changeColor: (newColor) => {},
    setNewUserRegister: (userName) => {},
    userList: [],
    isCurrentUserOnline: false
}); 
export default SocketContext;