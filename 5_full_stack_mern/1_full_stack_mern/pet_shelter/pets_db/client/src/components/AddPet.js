import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PetForm from './PetForm';
import {Link, navigate} from '@reach/router';
import DeletePet from './DeletePet';

const AddPet = (props) => {
    // create state to set new Pet
    const[pet, setPet] = useState({
        "name": "",
        "type": "",
        "description": "",
        "skill1": "",
        "skill2": "",
        "skill3": ""
    });

    //create state for errors
    const [errors, setErrors] = useState({});

    //handleSubmit function
    const handleSubmit = (e) => {
        e.preventDefault();
        // call axios to post object to API
        axios.post("http://localhost:8000/pets/new", pet)
            .then((res) => {
                console.log(res.data);
                // if we have validation errors, not errors with our server
                if (res.data.errors) {
                    setErrors(res.data.errors)
                }
                else {
                    // on success, redirect (navigate) to the movie list
                    navigate("/");
                }
            })
            // failure, save the errors in state so the user can correct 
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <h1>Add Pet</h1>
            <PetForm
                pet={pet}
                setPet={setPet}
                errors={errors}
                handleSubmit={handleSubmit}
                submitButtonLabel={"Add Pet"}
            />
        </div>
    )
}

export default AddPet;