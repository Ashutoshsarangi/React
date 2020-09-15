import React, { Component } from 'react';
import './App.css';
import { ageDown, ageUp } from './store/action/action';
import { connect } from 'react-redux';

class App extends Component {

  handleClick() {
    alert('Inside Up Click');
    this.props.ageUp();
  }

  render() {
    console.log(this.props);
    return (
      <div className="App" >
        Age: <span>{this.props.age}</span >
        <button onClick={() => { this.handleClick() }} >Age Up</button>
        <button onClick={this.props.ageDown} >Age Down</button>
      </div >
    );
  }
}
const mapStateToProps = (state) => {
  return {
    age: state.age
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    ageUp: () => dispatch(ageUp()),
    ageDown: () => dispatch(ageDown())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
