import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PetForm from './PetForm';

const AddPet = (props) =>{
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
    const[errors, setErrors] = useState({});

    //handleSubmit function
    const handleSubmit = (e) => {
        e.preventDefault();
        // call axios to post object
        axios.post('http://localhost:8000/pets/new', pet)
        //success statement
        .then((res) => {
            console.log(res.data);
        // if input errors, set errors in errors state
            if(res.data.error){
                setErrors(res.data.erros);
            }
        //if no input errors, redirect to dashboard
            else{
                navigate("/");
            }
        })
        //catching backend errors (server failure)
        .catch((err)=> {
            console.log (err);
        })
    }





    return(
        <div>
    {/* submitButtonLabel function */}
            <PetForm
            pet = {pet}
            setPet = {setPet}
            errors = {errors}
            handleSubmit = {handleSubmit}
            submitButtonLabel = {"Add Pet"} />
        </div>
    )
}

export default AddPet;