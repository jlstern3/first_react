import './App.css';
import {Router} from '@reach/router';
import AllMovies from './components/AllMovies';
import MovieDetails from './components/MovieDetails';
import CreateMovie from './components/CreateMovie';
import UpdateMovie from './components/UpdateMovie';

function App() {
  return (
    <div className="App">
      <AllMovies/>
      <MovieDetails/>
      <UpdateMovie/>
      <CreateMovie/>
    </div>
  );
}

export default App;
