import {useState, createContext} from 'react';


export const MovieContext = createContext();

export const MovieProvider = (props)=>{
    const [movies, setMovies] = useState([
        {
            id:123,
            name:'Abraka Dabra',
            price: 10
        },
        {
            id:1231,
            name:'Car - 1',
            price: 20
        },
        {
            id:4544,
            name:'Race - 3',
            price: 10
        },
        {
            id:89898,
            name:'Emoji Movie',
            price: 10
        }
    ])
    return (
        <MovieContext.Provider value= {[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>

    );
}