import React from 'react';


class ConditionalRenderingComponent extends React.Component{
    state = {
        counter: 0
    }
    incrementCounter = () => {
        this.setState((state) => ({
           counter:  state.counter+1
        }));
    }
    render(){
        return(
            <div>
                {
                    (this.state.counter % 2 == 0) ? 
                        <h1>Even Component</h1> : <h1>Odd Component</h1>
                }
            <h2>Counter :- {this.state.counter}</h2>
                <button onClick={this.incrementCounter}>Increment</button>

            </div>
        );
    }
}

export default ConditionalRenderingComponent;