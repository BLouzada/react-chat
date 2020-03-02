import React, { useContext } from 'react';
import SocketContext from './socket_context/context'

function UserList(props) {    
    const {messages} = useContext(SocketContext);
    console.log('messages', messages)


    
    return (
        <div>
          <h1>Messages:</h1>
          { messages.length === 0 && <h4>No messages. Be the first to send a message!</h4> }

          { 
              messages.map((message, index) =>(                
                <span key={index}> 
                    {message.userId}: {message.message} 
                    <br></br>
                </span>
              ))
            
          }
       </div>  
    );
}

export default UserList;
