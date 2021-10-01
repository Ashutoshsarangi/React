


const initialState={
    age: 21
}

const reducer =  (state= initialState, action) =>{
    const newState = {...state};

    if(action.type === 'Add'){
        newState.age = newState.age+ action.val
    }
    if(action.type === 'Sub'){
        newState.age = newState.age- action.val
    }

    return newState;
}

export default reducer;