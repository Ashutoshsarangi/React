import React, { Component, useRef } from 'react';
function App() {
  const _input = useRef();
  const unControlledHandler = () => {
    console.log(_input);
    console.log(_input.current.value);
  };
  return (
    <div className="App">
      {
        /**
         * UnControlled Component
         */
      }
      <h1>UnControlled Component</h1>
      <input type="text" ref={_input}></input>
      <button onClick={() => unControlledHandler()}>UnControlled Component</button>
      <h1>Controlled Component As we are using state to handle Elements</h1>
    </div>
  );
}

export default App;
