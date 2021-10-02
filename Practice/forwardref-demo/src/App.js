import './App.css';
import {useRef} from 'react';
import Input from './Input';

function App() {
  const inputRef= useRef(null);
  return (
    <div className="App">
      <Input ref={inputRef}></Input>
    </div>
  );
}

export default App;
