import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Contact() {
  let history = useHistory();
  function clickHandler() {
    alert('inside');
    history.push('/home');
  }
  return (
    <div>
      Contact Works
      <button onClick={() => clickHandler()}>go to Home</button>
    </div>
  );
}
