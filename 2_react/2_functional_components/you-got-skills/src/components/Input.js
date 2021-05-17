import React, { useState } from 'react';

const Input = () => {
    // Creating State
    const [newSkill, setNewSkill] = useState("");
    const [skillList, setSkillList] = useState([]);

    // Create function for when form is submitted
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log("Adding new skill: " + newSkill);
    // Saying: put newSkill into an array and put that array into skillList's state
        setSkillList([...skillList, newSkill]);
    }
    return (
        <div>
            <h3>Skills Form</h3>
            <form onSubmit={(e) => submitHandler(e)}>
                <input type="text" name="newSkill" onChange={(e) => setNewSkill(e.target.value)} />
                <button>Add Skill</button>
            </form>
        </div>
    )
}

export default Input;