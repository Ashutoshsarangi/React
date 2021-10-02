
import React from 'react';
function Input(props, ref){
    return(
        <input ref={ref}/>
    );
}

const forwardRef = React.forwardRef(Input);
export default forwardRef;