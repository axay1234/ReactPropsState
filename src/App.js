import React, { useState } from 'react';

import './App.css';
import UserInput from './UserInput';
import UserOutput from './UserOutput';


const App = (props) => {

 const [nameState, setNameState] = useState ({
  userName: 'afa'
 });

const userNameChangeHandler = () => {
  setNameState ({userName: 'Axaty'  });
}
 
    return (
      <div className="App">
        <button onClick = {userNameChangeHandler}>Name change</button>
        <UserInput changed= {nameState.userName} />
        <p userName= {nameState.userName}/>
        <UserOutput userName= {nameState.userName}/>
        <UserOutput userName = {nameState.userName}/> 
        <UserOutput userName = {nameState.userName}/>
      </div>  
    );
    }
 
  


export default App;
