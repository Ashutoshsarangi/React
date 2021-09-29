import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import React, {Suspense} from 'react';

const Comp1 = React.lazy(()=> import('./comp1'));
const Comp2 = React.lazy(()=> import('./comp2'));

function App() {
  return (
    <div >
      <Suspense fallback={<div>Loading ......</div>}>
      <Router>
        <Switch>
          <Route path="/" exact render={(props)=>{
            return <Comp1 {...props} />
          }}/>
          <Route path="/comp2" render={(props)=>(
             <Comp2 {...props}/>
          )}
          />
        </Switch>
      </Router>
      </Suspense>
      
    </div>
  );
}

export default App;
