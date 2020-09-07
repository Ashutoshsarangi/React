import React, { Component } from 'react';
import { Input } from '../../atoms/input';
import { TextArea } from '../../atoms/textArea';
import { Button } from '../../atoms/buttons';

export class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      comment: ''
    }
  }
  inputHandler(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    })
  }
  saveInfo() {
    console.log(this.state);
  }
  render() {
    return (
      <>
        <Input name="firstName" placeholder="Enter First Name" val={this.state.firstName} handler={(event) => this.inputHandler(event)} />
        <Input name="lastName" placeholder="Enter Last Name" val={this.state.lastName} handler={(event) => this.inputHandler(event)} />
        <TextArea name="comment" placeholder="Enter Comment" val={this.state.comment} handler={(event) => this.inputHandler(event)} />
        <Button name="Submit" handler={() => this.saveInfo()} />
      </>
    );
  }
}