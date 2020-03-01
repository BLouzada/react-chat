import { socket } from './index';
export const socketEvents = ({ setValue }) => {
    socket.on('user.online', (payload) => {
        setValue(state => {
            var newUserList = payload.clients;
            return { ...state, userList: newUserList } 
        });
    });

    socket.on('message.from.user', (payload) => {
        setValue(state => {
            return { ...state, messages:  state.messages.concat([payload]) } 
        });
    });
};