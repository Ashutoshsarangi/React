import React, { useContext } from 'react';
import { myContext } from './context';

import authContextProvider from './hoc/authContextProvider';

const Guest = () => {
    const { name, age, handleClickEvent } = useContext(myContext)
    return (
        < div >
            <h1>This is A Guest Component</h1>
            <div>
                <h4>Name: {name}</h4>
                <h4>value: {age}</h4>
                <button onClick={handleClickEvent}>Click</button>
            </div>
        </div >
    );
}

export default authContextProvider(Guest, { is: false });