import React, { Component } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

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
    axios.post('https://run.mocky.io/v3/19c3eecf-4cf3-427a-adb7-2dddf862df63',
      {
        userEmail: this.state.userEmail,
        userPassword: this.state.userPassword
      }
    ).then((res) => {
      console.log('inside Login  data', res);
      if (res.status === 200) {
        // let history = useHistory();
        console.log(this.props);
        // this.props.router.push('/home');
      }
    })
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
