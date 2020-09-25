import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import News from './pages/news';


function App() {
  return (
    <Router>
      <ul>
        <li key='1'>
          <Link to='/home'>Home</Link>
        </li>
        <li key='2'>
          <Link to='/about/Basu'>About</Link>
        </li>
        <li key='3'>
          <Link to='/contact'>Contact</Link>
        </li>
        <li key='4'>
          <Link to='/news'>News</Link>
        </li>
      </ul>
      <Switch>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/about/:userName'>
          <About></About>
        </Route>
        <Route path='/contact'>
          <Contact></Contact>
        </Route>
        <Route path='/news'>
          <News></News>
        </Route>
        <Route path='/'>
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
