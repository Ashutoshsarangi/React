

function Comp1(props){
    return (
        <div>
            <h1>Comp1</h1>
            <button onClick={()=> props.history.push('/comp2')}> Go to Comp 2</button>
        </div>
    );
}

export default Comp1;