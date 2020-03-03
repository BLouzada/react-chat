import { socket } from "./index";

export const addClientToQueue = () => {
    socket.emit('addClientIdToQueue');
};

export const getQueueLength = () => {
    socket.emit('queueLengthToSocket');
};

export const removeUserFromQueue = () => {
    socket.emit('removeUserFromQueue');
}; export const changeColorToServer = (payload) => {
    socket.emit('changeColor', payload)
}; export const registerNewUser = (payload) => {
    socket.emit('registerNewUser', payload)
};