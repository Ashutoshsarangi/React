


const initialState = {
    age: 21,
    history: []
}

const reducer = (state= initialState, action)=>{
    const newState = {...state};
    switch(action.type){
        case 'Add':
            return {
                ...state,
                age: state.age + action.val,
                history: state.history.concat({age:state.age + action.val, id: Math.random()})
            }
        break;
        case 'Sub':
            return{
                ...state,
                age: state.age - action.val,
                history: state.history.concat({age: state.age-action.val, id: Math.random()})
            }
        break;
        case 'Delete_Item':
            return {
                ...state,
                history: state.history.filter((item)=>{
                    if(item.id !== action.key){
                        return true;
                    }
                })
            }
    }


    return newState;
}

export default reducer;