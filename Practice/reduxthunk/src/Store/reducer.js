


const initiaState={
    age: 21
}

const reducer = (state=initiaState, action)=>{
    const newState = {...state};
    switch(action.type){
        case 'Add':
            return {
                ...state,
                age: state.age + action.val
            }
        break;
        case 'Sub':
            return{
                ...state,
                age: state.age - action.val
            }
        break;
    }
    return newState;
}

export default reducer;