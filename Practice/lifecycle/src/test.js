import {useEffect} from 'react';

function Test(){

    useEffect(()=>{
        console.log('Inside Use Effect of Child function ');
    });

    console.log('Hello')
}

export default Test;