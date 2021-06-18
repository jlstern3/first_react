import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import {Link, navigate} from '@reach/router';

const MovieDetails = (props) =>{
    //create state to hold the movie details
    const[movie, setMovie] = useState({});

    //useEffect to have details rendered initially
    useEffect(() => {
        //axios call to get the details
        axios.get("http://localhost:8000/api/movies/" + props.id)
            .then((res) => {
                console.log(res.data);
        //set state with the details from the API
                setMovie(res.data);
            })
            .catch(err => { 
                console.log(err);
            });
        // if someone changes the props.id (meaning changing the page), it'll rerun useEffect
    }, [props.id]);

    return(
        <div>
            <h1>Movie Details</h1>
            <p>Title: {movie.title}</p>
            <p>Genre: {movie.genre}</p>
            <p>Producer: {movie.producer}</p>
            <p>Length: {movie.length}</p>
            <p>Production Date: {
            movie.dateProduction !== "" ?
            ((new Date(movie.dateProduction)).toLocaleDateString("en-us"))
            : ""
            }</p>
            <p>Rating: {movie.rating}</p>
            <p><img src = {movie.coverArtURL} alt = {movie.title}/></p>
            <Link to = {"/movies"} >
                <button>Back to All Movies</button>
            </Link>
            <Link to = {"/movies/" + props.id + "/update"} >
                <button>Edit {movie.title}</button>
            </Link>
        </div>
    )
}

export default MovieDetails;