import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div >
        <div>
          <h1>Auth Details</h1>
          Name: {this.props.auth.authCredential.userName}<br></br>
          Role: {this.props.auth.authCredential.role}<br></br>
          LoggedIn: {this.props.auth.authCredential.loggedIn + ''}<br></br>
          <button onClick={this.props.addCredential}>Add Creds</button>
        </div>
        <div>
          <h1>Todo List Details</h1>
          {/* Name: {this.props.auth.authCredential.userName}<br></br>
          Role: {this.props.auth.authCredential.role}<br></br>
          LoggedIn: {this.props.auth.authCredential.loggedIn}<br></br> */}
          <button onClick={this.props.addTodo}>Add TODO</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.authReducer,
    todo: state.todoReducer
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addCredential: () => {
      return dispatch({
        type: 'ADD_CREDENTIAL',
        payload: {
          userName: 'Ashu',
          access_token: 'dash khdashdahsdjhasghjd',
          role: 'Admin',
          loggedIn: true
        }
      })
    },
    addTodo: () => {
      return dispatch({
        type: 'ADD_TODO',
        payload: {
          name: 'Thunk MiddleWare',
          status: 'pending',
        }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
