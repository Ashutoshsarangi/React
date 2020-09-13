import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  withRouter
} from 'react-router-dom';
import Header from './component/common/header';
import Footer from './component/common/footer';
import Login from './component/auth/login';
import BookList from './component/bookstore';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/login" component={withRouter(Login)} />
        <Route path="/" component={withRouter(Login)} exact />
        <Route path="/book" component={withRouter(BookList)} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
