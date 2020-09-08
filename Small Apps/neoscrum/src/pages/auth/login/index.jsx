import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { userEmail: '', userPassword: '' };
  }

  inputHandler(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    })
  }
  submitHandler() {
    console.log('Login Form', this.state);
  }

  render() {
    return (
      <>
        <input type="email" name="userEmail" value={this.state.userEmail} onChange={(event) => this.inputHandler(event)} placeholder="Enter Developer Email" />
        <input type="password" name="userPassword" value={this.state.userPassword} onChange={(event) => this.inputHandler(event)} placeholder="Enter password" />
        <button onClick={() => this.submitHandler()}>Submit</button>
      </>
    );
  }
}
