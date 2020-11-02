import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const clickHandler = (type) => {
    if (type === 'INCR') {
      // dispatch Incr
      dispatch({ type });
    } else {
      // dispatch Decr
      dispatch({ type });
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h3>Counter: {counter}</h3>
        <button onClick={() => clickHandler('INCR')}>Add</button>
        <button onClick={() => clickHandler('DECR')}>Remove</button>
      </header>
    </div>
  );
}

export default App;
