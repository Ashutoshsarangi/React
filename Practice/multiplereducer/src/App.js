import logo from './logo.svg';
import './App.css';

import {connect} from 'react-redux';
import React from 'react';
class App extends React.Component {
  render(){
    return (
      <div className="App">
       <h1>A: <span>{this.props.a}</span></h1>
       <h1>B: <span>{this.props.b}</span></h1>
       <button onClick={()=> this.props.addA(this.props.b)}>Increase A</button>
       <button onClick={()=> this.props.addB(this.props.a)}>Increase B</button>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return{
    a: state.Ra.A,
    b: state.Rb.B
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    addA: (b)=>  dispatch({type: 'AddA', B:b}),
    addB: (a) => dispatch({type:'AddB', A:a})
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
