import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import {Link, navigate} from '@reach/router';
import DeleteMovie from './DeleteMovie';

const AllMovies = (props) =>{
//create state to hold an array of movie objects
    const[movies, setMovies] = useState([]);

//useEffect to get data as soon as component is rendered
    useEffect(() => {
//use axios to get all movies from the backend server API (that we created)
    axios.get("http://localhost:8000/api/movies")
        .then((res) => {
            console.log(res.data);
            //set new data in our state from the API - set State
            setMovies(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    const afterDeleteHandler = (deletedMovieId) => {
        //filter goes through every movie (like map) and includes or excludes depending on if its true or false
        let filteredMovieArray = movies.filter((movie) => {
            //must return true or false
            //true will include the movie int he new array
            //false will skip this movie and NOT include it in the new array
            return movie._id !== deletedMovieId;
        });
        setMovies(filteredMovieArray);
    }

    return(
        <div>
            <h1>All Movies</h1>
            {/* map over state to display all movies */}
            {
                movies.map((movie,index) => (
                    <div key = {index}>
                        {/* Create a link to the details page with each movie displayed */}

                        <Link to = {"/movies/" + movie._id }>
                        {movie.title}</Link>
                        <DeleteMovie 
                        id = {movie._id} 
                        afterDeleteHandler = {afterDeleteHandler}/>
                    </div>
                ))
            }
            {/* add movie button */}
            <Link to = {"/movies/new"}><button>Create a Movie</button></Link>
        </div>
    )
}

export default AllMovies;