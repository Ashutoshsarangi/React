
import {useContext} from 'react';
import { MovieContext } from './Context/movieContext';


const MovieList = ()=>{
    const [movies, setMovies] = useContext(MovieContext);
    return(
        <div>
            {
                movies.map((item)=>{
                    return (<h3 key={item.id}>{item.name}</h3>);
                })
            }
        </div>
    );
}

export default MovieList;