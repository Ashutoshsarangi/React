

const initialState= {
    age: 21
}

function  reducer(state= initialState, action){
    switch(action.type){
        case 'increment':
            return{
                ...state,
                age: state.age + action.val
            }
        break;
        case 'decrement':
            return{
                ...state,
                age: state.age - action.val
            }
        break;
        default:
            return state;
    }

}

export default reducer;