import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import {Link, navigate} from '@reach/router';
// import MovieForm from './MovieForm';

const DeleteMovie = (props) => {
    //need to know which id to delete and which afterDeleteHandler you're activating
    const {id, afterDeleteHandler} = props
    
    const deleteHandler = (e, id) => {
        e.preventDefault();
        axios.delete("http://localhost:8000/api/movies/" + id)
        .then((res) => {
            console.log(res.data);
            afterDeleteHandler(); //unique things that the parent wants to do now
        })
        .catch(err => console.log(err))

    }

    return(
        <button className = "deleteBtn" onClick = {(e)=> deleteHandler(e, id)}>Delete Movie</button>
    )
}

export default DeleteMovie;