import React, { useContext } from 'react';
import SocketContext from './socket_context/context'

function UserList(props) {    
    const {userList} = useContext(SocketContext);
    console.log('userList', userList)
    return (
        <div>
            <h1>Clients connected:</h1>
            <ol>
            {
                userList.map((user, index) =>(                
                <li key={index}> 
                    {user} 
                </li>                   
                ))
            }
            </ol>  
        </div>
    );
}

export default UserList;
