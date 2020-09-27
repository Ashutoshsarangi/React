import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';

function App() {
  const [todo, setTodo] = useState(['']);
  const [input, setInput] = useState(['']);
  function addTodo(event) {
    event.preventDefault();
    if (input.trim()) {
      setTodo([...todo, input]);
    }
    setInput('');
  }
  return (
    < div className="App" >
      <h1>WelCome to TODO + FIREBASE !!!</h1>
      <form>
        <input value={input} onChange={(event) => setInput(event.target.value)} />
        <Button disabled={!input} type='submit' onClick={(event) => addTodo(event)} variant="contained" color="primary">
          ADD TODO
        </Button>
      </form>
      <ul>
        {
          todo.map((item) => (
            <li>{item}</li>
          ))
        }
      </ul>
    </div >
  );
}

export default App;
