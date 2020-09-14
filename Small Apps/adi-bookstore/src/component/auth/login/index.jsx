import React, { Component } from 'react';
import './style.css';
import Swal from 'sweetalert2';
import { connect } from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { userName: '', password: '' };
  }
  inputHandler(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    })
  }
  submitForm(event) {
    event.preventDefault();
    console.log(this.state);
    if (this.state.userName === 'adi@gmail.com' && this.state.password === "adi") {
      Swal.fire('Welcome TO Book Store');
      this.props.logIn();
      this.props.history.push('/book');
    } else {
      Swal.fire('You have Entered Wrong Credential');
    }

  }
  render() {
    return (
      <>
        <div className="formContainer">
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" name="userName" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.userName} onChange={(event) => this.inputHandler(event)} />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" name="password" className="form-control" id="exampleInputPassword1" value={this.state.password} onChange={(event) => this.inputHandler(event)} />
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary" onClick={(event) => this.submitForm(event)}>Submit</button>
          </form>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    logIn: () => dispatch({
      type: 'loggedIn'
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);