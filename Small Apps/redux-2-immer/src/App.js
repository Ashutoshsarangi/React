import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <button onClick={() => this.props.addTask('Thunk + Redux')}>Add thunk task</button>
        <button onClick={() => this.props.addTask('Saga + Redux')}>Add Saga task</button>
        <ul>
          {
            this.props.toDoItem.map((item) => {
              return <li key={item.id} onClick={() => this.props.removeItem(item.id)}>{item.name} ----> {item.status}
                <button onClick={(event) => this.props.updateTask(event, { name: `Updated ${item.name}`, id: item.id, status: 'DOne' })}>Update task</button>
              </li>
            })
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    toDoItem: state.toDoItem
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (name) => dispatch({
      type: 'ADD',
      payload: {
        name,
        status: 'pending'
      }
    }),
    removeItem: (id) => {
      console.log('I am Not Getting called');
      dispatch({
        type: 'REMOVE',
        payload: {
          id,
        }
      })
    },
    updateTask: (event, obj) => {
      event.stopPropagation();
      return dispatch({
        type: 'UPDATE',
        payload: {
          id: obj.id,
          name: obj.name,
          status: obj.status
        }
      })
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
