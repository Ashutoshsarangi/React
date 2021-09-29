import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom';
import CompA from './compA';
import CompB from './compB';
import CompC from './compC';



function Comp2(){
    return (
        <div>
            <h1>Comp2</h1>
            <Link to={{pathname:"/compa", state:{name:'Ashu'}}}>
                <h3>Comp A</h3>
            </Link>
            <Link to={{pathname:"/compb", state:{name: 'Bashu'}}}>
                <h3> Comp B</h3>
            </Link>
            <Link to={{pathname:"/compc", state:{name: 'ggggg'}}}>
                <h3> Comp C</h3>
            </Link>
            <Router>
                <Switch>
                    <Route path="/compa" render={(props)=>(
                      <CompA {...props}/>
                    )}
                    />
                    <Route path="/compb" render={(props)=>{
                        return <CompB {...props}/>
                    }}
                    />
                    <Route path="/compc" render={(props)=>{
                        return <CompC {...props}/>
                    }}
                    />
                </Switch>
            </Router>
            
        </div>
    );
}

export default Comp2;