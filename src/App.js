import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput';
import UserOutput from './UserOutput';


class App extends Component {

state = {
  userName: 'Akki'
};

userNameChangeHandler = (event) => {
  this.setState ({userName: event.target.value  });
}
  render() {
    return (
      <div className="App">
        <UserInput changed = {this.userNameChangeHandler} userName= {this.state.userName}/>
        <UserOutput userName= {this.state.userName}/>
        <UserOutput userName = {this.state.userName}/> 
        <UserOutput userName = {this.state.userName}/>
      </div>
    );
    }
  }
  


export default App;
