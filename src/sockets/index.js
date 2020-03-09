import io from "socket.io-client";
import { socketEvents } from "./events";
import { getQueueLength } from "./emit";
import { changeColorToServer, registerNewUser } from "./emit";
export const socket = io();

export const initSockets = ({ setValue }) => {
    socketEvents({ setValue });
    getQueueLength();
};
export const changeColor = (newColor) => {
    changeColorToServer(newColor);
};
export const registerUser = (userName) => {
    registerNewUser(userName);
};