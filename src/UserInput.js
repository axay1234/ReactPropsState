import React from 'react';

const UserInput = (props) =>{
    
   
   
    return ( 
        <div>
             <input type="text" onChange = {props.changed} value= {props.userName}/>
             <input type = "text" />
        </div>
    );
}

export default UserInput;