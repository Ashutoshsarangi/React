import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState([{ id: 1, userName: 'Ashu', text: 'Hey' }, { id: 2, userName: 'Litu', text: 'Hello Bhai' }]);
  const [userName, setUserName] = useState('');
  useEffect(() => {
    setUserName(prompt('Please Enter User Name'));
  }, []);
  function sendMessage() {
    setMessage([...message, { userName, text: input }]);
    setInput('');
  }
  return (
    <div className="App">
      <h1>Hello {userName} :rocket</h1>
      <input value={input} onChange={(event) => setInput(event.target.value)} />
      <button onClick={() => sendMessage()}>Send Message</button>
      <ul>
        {
          message.map((msg) => {
            return (
              <li key={msg.id}>{msg.userName} :- {msg.text}</li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default App;
