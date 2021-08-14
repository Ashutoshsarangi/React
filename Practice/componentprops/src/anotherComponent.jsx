import React from 'react';

class AnotherComponent extends React.Component{


render(){
    return(
        <div>
            <h1>Another Component name:- {this.props.name}</h1>
        </div>
    );
}
}

export default AnotherComponent;


