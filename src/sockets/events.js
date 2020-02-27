import { socket } from './index';
export const socketEvents = ({ setValue }) => {
    socket.on('user.online', (payload) => {
        setValue(state => {
            var newUserList = state.userList.concat([payload])
            return { ...state, userList: newUserList } 
        });
    });
};