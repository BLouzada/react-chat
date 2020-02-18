import React, { useState, useEffect }  from 'react';

function UserList(props) {    
    const [userList, setUserList] = useState([]);
    useEffect(() => {
        props.socket.on('user.online', payload => {
            var newList = userList.concat([payload])
            setUserList(newList);
        });
    }, [userList, props.socket]);
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
