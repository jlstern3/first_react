import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import {Link, navigate} from '@reach/router';
import MovieForm from './MovieForm';
import DeleteMovie from './DeleteMovie';

const CreateMovie = (props) =>{

    // create state for the new movie Object
    const [movie, setMovie] = useState ({
        "title": "",
        "genre": "",
        "producer": "",
        "length": "",
        "dateProduction": "",
        "rating": "",
        "isOnNetflix": false,
        "coverArtURL": ""
    });
    const[errors, setErrors] = useState({});

    // handle form submit to create the document through the API
    const handleSubmit = (e) => {
        e.preventDefault();
        // call axios to post object to API
        axios.post("http://localhost:8000/api/movies", movie) 
            .then((res) => {
                console.log(res.data);
                // if we have validation errors, not errors with our server
                if(res.data.errors){
                    setErrors(res.data.errors)
                }
                else{
                // on success, redirect (navigate) to the movie list
                    navigate("/movies");
                }
            })
            // failure, save the errors in state so the user can correct 
            .catch(err => {
                console.log(err)
            })
} 
    return(
        <div>
            <h1>Create Movie</h1>
            <MovieForm
            movie = {movie}
            setMovie = {setMovie}
            errors = {errors}
            handleSubmit = {handleSubmit}
            submitButtonLabel = {"Create Movie"} 
            />
        </div>
    )
}

export default CreateMovie;