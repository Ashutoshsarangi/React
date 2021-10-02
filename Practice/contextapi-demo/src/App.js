import AddMovie from './addMovie';
import './App.css';
import { MovieProvider } from './Context/movieContext';
import Movie from './movie';
import MovieList from './movieList';



function App() {
  return (
    <div className="App">
      <MovieProvider>
      <AddMovie/>
      <MovieList/>
      <Movie/>
      </MovieProvider>
    </div>
  );
}

export default App;
