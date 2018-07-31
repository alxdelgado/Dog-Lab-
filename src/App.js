import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// We can import from the folder, because the default file is
// index.js
import Login from './Login';
import MainContainer from './MainContainer'; 


class App extends Component {
  constructor() {
    super(); 
    this.state = {
      logged: false,
      username: ''
    }
  }

login = (username) => {
  // We will set the state of this component, 
  // but we will call it in the login component.

  this.setState({
    username: username, 
    logged: true
  });

  console.log('login function in App is working', username); 
}

  render() { 
    // Look up Ternary statement in React, how to handle the rendering of two
    // components based on a boolean value. 
    console.log(this.state, 'inside of app component');
    return (
      <div className="App">
        {this.state.logged ? <MainContainer username={this.state.username} /> : <Login login={this.login}/>}
      </div>
    );
  }
}


export default App;
