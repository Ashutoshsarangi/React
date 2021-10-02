

export const ageUpAction = ()=>{
    return dispatch =>{
        setTimeout(()=>{
            dispatch(ageUpSyncAction());
        }, 5000);
    }
}

export const ageUpSyncAction = ()=>{
    return {type:'increment', val:5};
}

export const ageDownAction = ()=>{
    return {type:'decrement', val:5};
}