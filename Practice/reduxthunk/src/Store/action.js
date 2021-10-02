

export const actionAgeUp = ()=>{
    return dispatch =>{
        setTimeout(()=>{
            dispatch(actionAgeUpAsync())
        }, 5000);
    }
}

export const actionAgeUpAsync = ()=>{
    return {type: 'Add', val: 5};
}

export const actionAgeDown= ()=>{
    return {type: 'Sub', val: 5};
}