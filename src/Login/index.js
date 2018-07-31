import React, {Component} from 'react';
// {Component} ---> this is called destructering. 
// Now we have Component in a variable, otherwise we would have to do React.Component

class Login extends Component {
  constructor() {
    super(); 
    this.state = {
      username: '', 
      password: ''
    }
  }

  handleChange = (e) => {
    // arrow functions allow you to use this, 
    // which you will have to for this.setState

    // computed properties, es6. 
    this.setState({[e.target.name]: e.target.value})
  
  }

  handleSubmit = (e) => {
    // this will stop our form from submitting a request and refreshing the page. 
    e.preventDefault
    console.log('handle submit is working');

    // We are calling the login function that we created in App.js, 
    // and we sent down as props in order to lift our state. 
    this.props.login(this.state.username);

  }

  render() {
    // you can always console.log() your state or (setState) here. 
    console.log(this.state, 'in render and in Login Component')
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='username' onChange={this.handleChange} value={this.state.value} placeholder='username'/>
        <input type='password' name='password' onChange={this.handleChange} value={this.state.value} placeholder='password'/>
        <button type='text' value='submit'>Submit</button>
      </form>

    )
  }
}

export default Login; 