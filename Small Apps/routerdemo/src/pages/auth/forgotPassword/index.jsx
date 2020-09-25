import React, { Component } from 'react';
import axios from 'axios';

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
    axios.post('https://run.mocky.io/v3/19c3eecf-4cf3-427a-adb7-2dddf862df63',
      {
        userEmail: this.state.userEmail,
      }
    ).then((res) => {
      console.log('inside Forgot Password  data', res);
    })
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