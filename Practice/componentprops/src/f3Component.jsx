

function F3Component(props){
    const x = {...props.user};
    return(
        <div>
            <h1>
                F3 Component College :- {x.college}
            </h1>
        </div>
    );
}

export default F3Component;