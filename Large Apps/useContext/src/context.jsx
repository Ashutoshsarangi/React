import React, { useState } from 'react';


export const myContext = React.createContext();
export const CustomContext = ({ children }) => {
    const [data, setDate] = useState({ name: 'Ashu', age: 10 });
    let handleClickEvent = () => {
        console.log('clicked')
        setDate({ ...data, age: data.age + 1 })
    }
    return (
        <myContext.Provider value={{
            ...data,
            handleClickEvent
        }}>
            {children}
        </myContext.Provider >
    );
}