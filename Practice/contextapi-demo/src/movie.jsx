
import {useContext} from 'react';
import { MovieContext } from './Context/movieContext';


const Movie = ()=>{
    const [movies, setMovies] = useContext(MovieContext);
    return (
        <h1>Number of Movies: <span>{movies.length}</span></h1>
    );
}

export default Movie;