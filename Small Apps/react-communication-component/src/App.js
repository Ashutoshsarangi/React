import React from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * 1. Parent-child Communication --> Using Props
 * 2. Parent-child-grandChild Communication --> using Props(Context API)
 * 3. Sibling -> They Communicate using Parents. 2nd Option to Use event Emitter
 */




function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
