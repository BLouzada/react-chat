import React, { useContext } from 'react';
import SocketContext from './socket_context/context'

function UserList(props) {    
    const {userList} = useContext(SocketContext);
    console.log('userList', userList)
    return (
        <ol>
          {userList.map((user, index) =>(                
              <li key={index}> 
                  {user.id} 
              </li>                   
       ))}
      </ol>  
    );
}

export default UserList;
