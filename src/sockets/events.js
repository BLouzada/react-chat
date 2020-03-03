import { socket } from './index';

export const socketEvents = ({ setValue }) => {
    socket.on('user.online', (payload) => {
        const newUserList = payload.loggedUsers
        setValue(state => {
            console.log('{ ...state, userList: newUserList }', )
            return { ...state, userList: newUserList.map(i => i.name) }
        });
    });
    socket.on('user.login', () => {
        setValue(state => {
            return { ...state, isCurrentUserOnline: true } 
        });
    });
    socket.on('user.offline', (payload) => {
        const newUserList = payload.loggedUsers        
        setValue(state => {
            return { ...state, userList: newUserList } 
        });
    });
    socket.on('user.logoff', () => {
        setValue(state => {
            return { ...state, isCurrentUserOnline: false };
        });
    });

    socket.on('message.from.user', (payload) => {
        setValue(state => {
            return { ...state, messages:  state.messages.concat([payload]) } 
        });
    });
};