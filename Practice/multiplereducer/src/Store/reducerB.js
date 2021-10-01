

const initialState ={
    B:1
}

const reducerB = ( state= initialState, action)=>{
    const newState = {...state}

    switch(action.type){
        case 'AddB':
            return{
                ...state,
                B: state.B + action.A
            }
        break;
    }
    return newState;
}


export default reducerB;