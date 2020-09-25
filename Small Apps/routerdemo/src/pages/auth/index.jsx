import React from 'react';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Register from './register';
import Login from './login';
import ForgotPassword from './forgotPassword';

export default function Auth() {
  return (
    <Router>
      <ul>
        <li key='1'>
          <Link to='/register'>Register</Link>
        </li>
        <li key='2'>
          <Link to='/login'>Login</Link>
        </li>
        <li key='3'>
          <Link to='/forgotPassword'>Forgot password</Link>
        </li>
      </ul>
      <h1>
        Neo Scrum
      </h1>
      <Switch>
        <Route path='/register'>
          <Register></Register>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='/forgotPassword'>
          <ForgotPassword></ForgotPassword>
        </Route>
        <Route path='/'>
          <Login></Login>
        </Route>
      </Switch>
    </Router>
  );
}