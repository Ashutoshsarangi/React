import React from 'react';

class ClassComponent extends React.Component{
    // https://www.youtube.com/watch?v=Zz9pLellSQA
    state = {
        name:'Ashu'
    }
    constructor(props){
        super(props);
        console.log('Inside Class Constructor');
    }
    static getDerivedStateFromProps(props, state){
        console.log('Get Derived State From Props', props, state);
        return null;
    }
    shouldComponentUpdate(nextProp, nextState){
        console.log('Should Component Update');
        return true;
    }
    handleClick = ()=>{
        alert('clicked');
        this.setState({name: 'Hjhjhj'});
        // this.state.name='dsada';
        console.log(this.state);
    }
    render(){
        return(
            <div>
                <h1>Class Based Component</h1>{
                    this.state.name
                }
                <button onClick={this.handleClick}>Submit</button>
            </div>
        );
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate', prevProps, prevState)
        return null;
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