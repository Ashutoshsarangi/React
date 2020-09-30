import React, { useState, useEffect } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import db from './config/firebase';
import firebase from 'firebase';


function App() {
  const [todo, setTodo] = useState(['']);
  const [input, setInput] = useState(['']);

  /**
   * @description When it loads It Should get the Data From FireStore
   */
  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot((snapshot) => {

      console.log(snapshot.docs.map((doc) => doc.data()));
      setTodo(snapshot.docs.map((doc) => doc.data().todoName));
    })
  }, []);// It loads When App Loads.




  function addTodo(event) {
    event.preventDefault();
    if (input.trim()) {
      db.collection('todos').add({
        todoName: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
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
