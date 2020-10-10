import React, { useState, useMemo } from 'react';
import './App.css';
import Child from './component/Child';


function App() {
  const [i, setI] = useState(0);
  const memoChild = useMemo(() => {
    return <Child></Child>
    // return <Child i={i}></Child>
  }, []);
  return (
    <div >
      <h3>Use Memo</h3>
      <h2>i: {i}</h2>
      <button onClick={() => setI(i + 1)} >Increment</button>
      <h3>Normal Component</h3>
      <Child></Child>
      <h3>Memo Child</h3>
      {memoChild}
    </div>
  );
}

export default App;
