import logo from './logo.svg';
import './App.css';
import React from 'react';
import { render } from 'react-dom';
import {connect} from 'react-redux';

class App extends React.Component {
  render(){
    return (
      <div className="App"> 
        <h1>Age: <span>{this.props.age}</span></h1>
        <button onClick={this.props.ageUp}>Age Up</button>
        <button onClick={this.props.ageDown}>Age Down</button>
        {
          this.props.history.map((item) =>{
            return (
              <li key={item.id} onClick={()=> this.props.deleteHistory(item.id)}>{item.age}</li>
            );
          })
        }
      </div>
    );
  }
}


const mapStateToProps = (state) =>{
  return{
    age: state.age,
    history: state.history
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    ageUp: ()=> dispatch({type: 'Add', val: 5}),
    ageDown : ()=> dispatch({type: 'Sub', val: 5}),
    deleteHistory : (id)=> dispatch({type: 'Delete_Item', key: id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
