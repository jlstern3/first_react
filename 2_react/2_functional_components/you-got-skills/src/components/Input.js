import React, { useState } from 'react';

const Input = () => {
    // Creating State
    const [newSkill, setNewSkill] = useState("");
    const [skillList, setSkillList] = useState([]);

    // Create function for when form is submitted
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log("Adding new skill: " + newSkill);
    // setter methods are ASYNCHRONOUS, they won't change the value in the getter until the entire function is done running!
    // So ALWAYS use setters methods at the END of the function so you don't count on teh new value too soon
    
    // Saying: add new skill to the original array of skills
        setSkillList([newSkill, ...skillList]);
        // Reset input bar to empty string   so you don't have to keep clearing out data
        setNewSkill("");
    }
    return (
        <div>
            <h3>Skills Form</h3>
            <form onSubmit={(e) => submitHandler(e)}>
                <input type="text" name="newSkill" value={newSkill} onChange={(e) => setNewSkill(e.target.value)} />
                <button>Add Skill</button>
            </form>
            {
                // Add second parameter to map and make that the key of each p element to allow React to differentiate between p elements when manipulating the DOM
                skillList.map((skill, index) => (
                    <p key={index}>{ skill }</p>
                ))
            }
        </div>
    )
}

export default Input;