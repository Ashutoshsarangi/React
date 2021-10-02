import './App.css';

import React, {Suspense} from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

const Header = React.lazy(()=> import('./Pages/header'));
const ProductListing = React.lazy(()=> import ('./Pages/productListing'));
const ProductDetail = React.lazy(()=> import('./Pages/productDetail'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading .....</div>}>
        <Router>
            <Header/>
            <hr/>
          <Switch>
            <Route path='/' exact render={(props)=>{
              return <ProductListing {...props}/>
            }}/>
            <Route path="/product/:id" render={(props)=>{
              return <ProductDetail {...props}/>
            }}/>
          </Switch>  
        </Router>
      </Suspense>     
    </div>
  );
}

export default App;
