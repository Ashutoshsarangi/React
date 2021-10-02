



const initialState= {
    singleProduct: {},
}


const SearchProductReducer = (state= initialState, action) =>{
    switch(action.type){
        case 'searchProduct':
            return {
                ...state,
                singleProduct:action.product
            }
        break;

        default:
            return state;
    }

}

export default SearchProductReducer;