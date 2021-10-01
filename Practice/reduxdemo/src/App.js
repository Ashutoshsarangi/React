import './App.css';
import {connect} from 'react-redux';
import React from 'react';

class App extends React.Component {
  render(){
    return (
      <div className="App">
          <h2>Age: <span>{this.props.age}</span></h2> 
          <button onClick={this.props.ageUp}>Age Up</button>
          <button onClick={this.props.ageDown}>Age Down</button>
      </div>
    );
  }
}


const mapStateToProps = (state)=>{
  return {age: state.age}
}
const mapDispatchToProps = (dispatch) =>{
  return {
    ageUp: () => dispatch({type:'Add', val: 5}),
    ageDown: () => dispatch({type: 'Sub', val: 5}) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
