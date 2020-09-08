import React, { Component } from 'react';


export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { userName: '', userEmail: '' }
  }
  onChangeHandler(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    })
  }
  submitChanges() {
    console.log('Registration Form', this.state);
  }
  render() {
    return (
      <>
        <input type="text" name="userName" value={this.state.userName} onChange={(event) => this.onChangeHandler(event)} placeholder="Enter Developer Name" />
        <input type="email" name="userEmail" value={this.state.userEmail} onChange={(event) => this.onChangeHandler(event)} placeholder="Enter Developer Email" />
        <input type="file" name="profilePic" placeholder="Upload a Profile Pic" />
        <button onClick={() => { this.submitChanges() }}>Submit</button>
      </>
    );
  }
}