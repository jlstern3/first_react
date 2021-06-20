import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import {Link, navigate} from '@reach/router';
import MovieForm from './MovieForm';
import DeleteMovie from './DeleteMovie';

const UpdateMovie = (props) =>{
    //destructured props (so can now use just id instead of props.id)
    const {id} = props
    // create state for the new movie Object
    const [movie, setMovie] = useState ({});
    const[errors, setErrors] = useState({});

    useEffect(()=> {
        axios.get("http://localhost:8000/api/movies/" + id)
        .then((res) => {
            console.log(res.data);
            setMovie(res.data);
        })
        .catch(err => { 
            console.log(err); 
        })
    }, []);

    // handle form submit to create the document through the API
    const handleSubmit = (e) => {
        e.preventDefault();
        // call axios to post object to API
        axios.put("http://localhost:8000/api/movies/" + id, movie) 
            .then((res) => {
                console.log(res.data);
                // if we have validation errors, not errors with our server
                if(res.data.errors){
                    setErrors(res.data.errors)
                }
                else{
                // on success, redirect (navigate) to the movie list
                    navigate("/movies/" + id);
                }
            })
            // failure, save the errors in state so the user can correct 
            .catch(err => {
                console.log(err)
            })
    } 
    
    const afterDeleteHandler = () => {
        navigate("/movies");
    }

    return(
        <div>
            <h1>Update Movie</h1>
            <MovieForm
            movie = {movie}
            setMovie = {setMovie}
            errors = {errors}
            handleSubmit = {handleSubmit}
            submitButtonLabel = {"Update Movie"}
            /> 
            <DeleteMovie 
            id = {props.id} 
            afterDeleteHandler = {afterDeleteHandler}/>
        </div>
    )
}

export default UpdateMovie;