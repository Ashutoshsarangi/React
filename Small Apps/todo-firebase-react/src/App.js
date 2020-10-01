import React, { useState, useEffect } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import db from './config/firebase';
import firebase from 'firebase';


function App() {
  const [todo, setTodo] = useState([{}]);
  const [input, setInput] = useState(['']);

  /**
   * @description When it loads It Should get the Data From FireStore
   */
  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot((snapshot) => {

      // console.log(snapshot.docs.map((doc) => doc.data()));
      setTodo(snapshot.docs.map((doc) => ({ id: doc.id, todoName: doc.data().todoName })));
    })
  }, []);// It loads When App Loads.

  // Remove Operation form Firebase
  function removeTodo(id) {
    db.collection('todos').doc(id).delete();
  }

  // Add Operation in Firebase
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
            <li key={item.id}>
              {item.todoName} --> {item.id}
              <button onClick={() => { removeTodo(item.id) }}>Delete Me</button>
            </li>
          ))
        }
      </ul>
    </div >
  );
}

export default App;
