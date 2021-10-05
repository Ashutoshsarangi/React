import logo from './logo.svg';
import './App.css';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './header';
import Test from './test';


function App(props) {
  return (
    <div className="App">
      <Router>
        <Header name="sdfagsdfha"/>
        <Switch>
          <Route path="/test" render={(props)=>{
            return <Test {...props}/>
          }}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
