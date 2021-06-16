import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import {Link, navigate} from '@reach/router';

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


    return(
        <div>
            <h1>All Movies</h1>
            {/* map over state to display all movies */}
            {
                movies.map((movie,index) => (
                    <div key = {index}>
                        <Link to = {"/movies/" + movie._id }>
                        {movie.title}</Link>
                    </div>
                ))
            }
            {/* Create a link to the details page with each movie displayed */}
        </div>
    )
}

export default AllMovies;