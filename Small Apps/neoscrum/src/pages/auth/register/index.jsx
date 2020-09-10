import React, { Component } from 'react';
import axios from 'axios';


export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { userName: '', userEmail: '', profilePic: null, percentage: 0 }
  }
  onChangeHandler(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    })
  }
  submitChanges() {
    // console.log('Registration Form', this.state);
    let data = new FormData();
    for (let item in this.state) {
      if (item) {
        data.append(item, this.state.item);
      }
    }

    data.append('profilePic', this.state.profilePic);
    console.log(data);
    const Options = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        let per = Math.floor(loaded * 100 / total);
        console.log(per + ' %');
        this.setState({
          percentage: per
        })
      }
    }


    // axios.post('https://run.mocky.io/v3/19c3eecf-4cf3-427a-adb7-2dddf862df63',
    //   {
    //     userName: this.state.userName,
    //     userEmail: this.state.userEmail
    //   }
    // ).then((res) => {
    //   console.log('inside normal data', res);
    // })
    axios.post('https://run.mocky.io/v3/19c3eecf-4cf3-427a-adb7-2dddf862df63', data, Options).then((res) => {
      console.log('inside file OBj', res);
    })
  }
  fileUpLoader(event) {
    this.setState({
      profilePic: event.target.files[0]
    })
  }
  render() {
    return (
      <>
        <input type="text" name="userName" value={this.state.userName} onChange={(event) => this.onChangeHandler(event)} placeholder="Enter Developer Name" />
        <input type="email" name="userEmail" value={this.state.userEmail} onChange={(event) => this.onChangeHandler(event)} placeholder="Enter Developer Email" />
        <input type="file" name="profilePic" onChange={(event) => this.fileUpLoader(event)} />
        {`${this.state.percentage} %`}
        <button onClick={() => { this.submitChanges() }}>Submit</button>
      </>
    );
  }
}