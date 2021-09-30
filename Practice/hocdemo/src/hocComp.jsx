import React from 'react';

function handleProps(props){
    console.log('22');
    const newProp = {...props, age:'27', college:'NIST'}
    return newProp;
}


function HocComp(tempComponent){
    console.log('33');
    return function renderComponent(args){
        return(tempComponent(handleProps(args)));
    }
}

export default HocComp;