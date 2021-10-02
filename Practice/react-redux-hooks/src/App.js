import './App.css';

import {useDispatch, useSelector} from 'react-redux';
import { ageDownAction, ageUpAction} from './Store/action';

function App() {

  const age = useSelector( (state) =>{
    return state.age;
  });

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Age: <span>{age}</span></h1>
      <button onClick={()=> dispatch(ageUpAction())}>Age Up</button>
      <button onClick={()=> dispatch(ageDownAction())}>Age Down</button>
    </div>
  );
}

export default App;
