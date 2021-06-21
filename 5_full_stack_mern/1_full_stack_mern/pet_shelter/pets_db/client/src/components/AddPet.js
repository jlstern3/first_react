import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PetForm from './PetForm';
import {Link, navigate} from '@reach/router';
import DeletePet from './DeletePet';

const AddPet = (props) => {
    const[pet, setPet] = useState({
        "name": "",
        "type": "",
        "description": "",
        "skill1": "",
        "skill2": "",
        "skill3": ""
    });

    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/pets/new", pet)
            .then((res) => {
                console.log(res.data);
                if (res.data.errors) {
                    setErrors(res.data.errors)
                }
                else {
                    navigate("/");
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
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