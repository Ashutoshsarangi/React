import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as action from './store/action/action';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <>
        {this.props.age}
        {
          this.props.loading &&
          <img src={logo} className="App-logo" />
        }
        <button onClick={() => this.props.ageUp({ value: 1 })}>Age Up</button>
        <button onClick={() => this.props.ageDown({ value: 1 })}>Age Down</button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.age,
    loading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ageUp: (payload) => dispatch(action.ageUp(payload)),
    ageDown: (payload) => dispatch(action.ageDown(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
