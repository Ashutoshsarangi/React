import React from 'react';

class ClassComponent extends React.Component{
    // https://www.youtube.com/watch?v=Zz9pLellSQA
    constructor(){
        super()
        this.state = {
            name:'Ashu'
        }
        console.log('Inside Class Constructor');
    }
    static getDerivedStateFromProps(props, state){
        console.log('Get Derived State From Props', props, state);
    }
    shouldComponentUpdate(nextProp, nextState){
        console.log('Should Component Update');
        // return true;
    }
    render(){
        return(
            <div>
                <h1>Class Based Component</h1>
                {
                    this.setState({name:'ads'})
                }
            </div>
        );
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Previous State', prevProps, prevState)
    }
    componentDidMount(){
        console.log('Component Did Mount');
    }
    componentDidUpdate(prevProp, prevState, snapshot){
        console.log('Component Did Update');
    }
    componentWillUnmount(){
        console.log('Component will Unmount')
    }

}

export default ClassComponent;