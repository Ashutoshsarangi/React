import logo from './logo.svg';
import './App.css';

import {connect} from 'react-redux';
import React from 'react';

import {actionAgeUp, actionAgeDown} from './Store/action';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <h1>Age: <span>{this.props.age}</span></h1>
        <button onClick={this.props.ageUp}>Age Up</button>
        <button onClick={this.props.ageDown}>Age Down</button>
      </div>
    );
  }
}

const mapStateToProps =(state) =>{
  return{
    age: state.age
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    ageUp: () => dispatch(actionAgeUp()),
    ageDown: () => dispatch(actionAgeDown())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
