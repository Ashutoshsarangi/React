import logo from './logo.svg';
import './App.css';
import AnotherComponent from './anotherComponent';
import F2Component from './f2Componet';
import F3Component from './f3Component';

function App() {
  const user={
    college:"NIST"
  }
  return (
    <div className="App">
      <h1>Main Component</h1>
      <AnotherComponent name="Ashu"/>
      <F2Component age="123"/>
      <F3Component user = {user}/>
    </div>
  );
}

export default App;
