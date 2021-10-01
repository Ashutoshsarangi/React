

const initialState={
    A:1
}

const reducerA = (state= initialState, action)=>{
    const newState = {...state};
    switch(action.type){
        case 'AddA':
            console.log(action, 'Inside Reducer A');
            return{
                ...state,
                A: state.A + action.B
            }
        break;
    }
    return newState;
}


export default reducerA;