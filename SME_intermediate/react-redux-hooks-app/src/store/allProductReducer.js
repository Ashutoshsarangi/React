

const initialState = {
    allProducts:[],
    loading: false
}

const AllProductReducer = (state=initialState, action)=>{
    switch(action.type){
        case 'AddProducts':
            return{
                ...state,
                allProducts: action.payload,
                loading: false
            }
        break;
        case 'loading':
            return{
                ...state,
                loading: true
            }
        break;
        default:
            return state;
    }
}

export default AllProductReducer;