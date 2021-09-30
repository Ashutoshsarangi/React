import {Fragment} from 'react';
import './App.css';
import HocComp from './hocComp';

function Comp1(props){
    console.log('11');
    return(
        <>
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
            <h1>{props.college}</h1>
        </>
    );
}

export default HocComp(Comp1);