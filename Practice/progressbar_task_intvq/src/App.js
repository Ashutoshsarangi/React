import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [progressAmount, setProgressAmount] = useState(0);
  useEffect(async ()=>{
    alert(progressAmount);
    const interval = await setInterval(() => {
      setProgressAmount((state)=> {
        if(state >= 100){
          clearInterval(interval);
          return state;
        }else{
          return state+10
        }
      });
    }, 1000);
  },[]);
  return (
    <div className="App">
      <div style={{border:"1px solid red", width: `${progressAmount}vw`}}>{progressAmount}%</div>
      <h1> Component Rerender</h1>
    </div>
  );
}

export default App;
