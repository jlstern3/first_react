import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import {Link, navigate} from '@reach/router';
import DeletePet from './DeletePet';

const PetDetails = (props) => {
    const [pet, setPet] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/pets/" + props.id)
            .then((res) => {
                console.log(res.data);
                setPet(res.data);
            })
            .catch(err => { 
                console.log(err);
            });
    }, [props.id]);

    return(
        <div>
            <h3>Details about: {pet.name}</h3>
            <div>
                <h5>Pet type: {pet.type}</h5>
                <h5>Description: {pet.description}</h5>
                <h5>Skills: {pet.skill1}, {pet.skill2}, {pet.skill3}</h5>
            </div>
        </div>
    )
}
export default PetDetails;