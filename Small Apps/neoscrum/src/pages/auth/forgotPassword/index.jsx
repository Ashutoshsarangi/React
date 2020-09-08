import React, { Component } from 'react';

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = { userEmail: '' }
  }
  inputHandler(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    })
  }
  submitForm() {
    console.log('Forgot password Form', this.state);
  }
  render() {
    return (
      <>
        <input type="email" name="userEmail" value={this.state.userEmail} onChange={(event) => this.inputHandler(event)} placeholder="Enter Developer Email" />
        <button onClick={() => this.submitForm()}>Submit</button>
      </>
    );
  }
}