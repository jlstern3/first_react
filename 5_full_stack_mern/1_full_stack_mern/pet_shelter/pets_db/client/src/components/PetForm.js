import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const PetForm = (props) => {
    // PetForm is the child of AddPet and EditPet
    // so PetForm takes in props passed down from two above components
    // since accepting props, need to deconstruct them here in order to use
    const { pet, setPet, errors, handleSubmit, submitButtonLabel } = props;

    // write function for input change
    const inputChange = (e) => {
        console.log("Input name:" + e.target.name);
        console.log("Input value:" + e.target.value);
        // make copy of what's currently stored in pet state
        let newPetObject = { ...pet };
        // make changes to copy
        newPetObject[e.target.name] = e.target.value;
        // save changes to copy (set in state)
        setPet(newPetObject);
    }



    return (
        <div>
            <h3>Know a pet needing a home?</h3>
            {/* back to dashboard button */}
            <button onClick = {() => navigate('/')}></button>

            {/* handleSubmit defined in each parent element due to diff functionality */}
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Pet Name: </label>
                <div>
                    <input
                        type="text"
                        name="name"
                        value={pet.name}
                        onChange={(e) => inputChange(e)} />
                    {
                        errors.name ?
                            <span className="errors">{errors.name.message}</span>
                            : null
                    }
                </div>
                <div>
                    <label>Pet Type: </label>
                    <input
                        type="text"
                        name="type"
                        value={pet.type}
                        onChange={(e) => inputChange(e)} />
                    {
                        errors.type ?
                            <span className="errors">{errors.type.message}</span>
                            : null
                    }
                </div>
                <div>
                    <label>Pet Description: </label>
                    <input
                        type="text"
                        name="description"
                        value={pet.description}
                        onChange={(e) => inputChange(e)} />
                    {
                        errors.description ?
                            <span className="errors">{errors.description.message}</span>
                            : null
                    }
                </div>
                <div>
                    <h3>Skills (Optional): </h3>
                
                <label>Skill 1: </label>
                <input
                    type="text"
                    name="skill1"
                    value={pet.skill1}
                    onChange={(e) => inputChange(e)} />
                {
                    errors.skill1 ?
                        <span className="errors">{errors.skill1.message}</span>
                        : null
                }
                <label>Skill 2: </label>
                <input
                    type="text"
                    name="skill2"
                    value={pet.skill2}
                    onChange={(e) => inputChange(e)} />
                {
                    errors.skill2 ?
                        <span className="errors">{errors.skill2.message}</span>
                        : null
                }
                <label>Skill 3: </label>
                <input
                    type="text"
                    name="skill3"
                    value={pet.skill3}
                    onChange={(e) => inputChange(e)} />
                {
                    errors.skill3 ?
                        <span className="errors">{errors.skill3.message}</span>
                        : null
                }
                </div>
                <button type = "submit">{submitButtonLabel}</button>
            </form>
        </div>
    )
}

export default PetForm;