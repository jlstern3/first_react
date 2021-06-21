import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PetForm from './PetForm';
import {Link, navigate} from '@reach/router';


const EditPet = (props) => {
    const{id} = props;
    const[pet, setPet] = useState({});
    const[errors, setErrors] = useState({});

    // need to grab specific pet and set it in state so we can then edit
    useEffect(()=> {
        axios.get("http://localhost:8000/pets/" + id)
        .then((res) => {
            console.log(res.data);
            setPet(res.data);
        })
        .catch(err => { 
            console.log(err); 
        })
    }, []);

    // define what to do when form submitted
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/pets/" + id + "/edit", pet)
            .then((res) => {
                console.log(res.data)
                if(res.data.errors){
                    console.log(res.data.errors);
                    setErrors(res.data.errors)
                }
                else{
                    navigate('/pets/' + id);
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    
    return(
        <div>
            <PetForm
                pet={pet}
                setPet={setPet}
                errors={errors}
                handleSubmit={handleSubmit}
                submitButtonLabel={"Edit Pet"}
            />
        </div>
    )
}

export default EditPet;