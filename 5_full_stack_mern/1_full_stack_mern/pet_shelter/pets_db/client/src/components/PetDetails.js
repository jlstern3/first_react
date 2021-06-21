import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
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

    const afterDeleteHandler = () => {
        navigate("/");
    }

    return (
        <div>
            <h3 className = "subtitle">Details about: {pet.name}</h3>

            <button className="homeBtn" onClick={() => navigate('/')}>back to home</button>
            <DeletePet
                id={props.id}
                afterDeleteHandler={afterDeleteHandler} />

            <div className="details_div">
                <h4>Pet type: </h4>
                <p>{pet.type}</p><br></br>
                <h4>Description: </h4>
                <p>{pet.description}</p><br></br>
                <h4>Skills: </h4>
                <ul>
                    <li>{pet.skill1}</li>
                    <li>{pet.skill2}</li>
                    <li>{pet.skill3}</li>
                </ul>
            </div>
        </div>
    )
}
export default PetDetails;