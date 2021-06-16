import './App.css';
import {Router} from '@reach/router';
import AllMovies from './components/AllMovies';
import MovieDetails from './components/MovieDetails';
import CreateMovie from './components/CreateMovie';
import UpdateMovie from './components/UpdateMovie';

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Movie DB</h1>
      <Router>
        <AllMovies default/>
        <CreateMovie path = "/movies/new"/>
        <MovieDetails path = "/movies/:id"/>
        <UpdateMovie path = "/movies/:id/update"/>
      </Router>
    </div>
  );
}

export default App;
