
import {useContext} from 'react';
import { MovieContext } from './Context/movieContext';


const AddMovie = ()=>{

    const [movies, setMovies] = useContext(MovieContext); 

    const addMovie = ()=>{
        setMovies(prevMovies => [...movies, {name: 'LOve Aaj Kal', price:20, id:Math.random()}])
    }
    return (
        <div>
            <button onClick={addMovie}>Add Movie</button>
        </div>
    );

}

export default AddMovie;