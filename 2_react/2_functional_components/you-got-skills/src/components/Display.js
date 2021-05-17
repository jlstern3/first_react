import React from 'react';

const Display = (props) =>{
    const {skillList} = props;
    return(
        <div>
            Display Skill List for {props.name}
            {
                // Add second parameter to map and make that the key of each p element to allow React to differentiate between p elements when manipulating the DOM
                skillList.map((skill, index) => (
                    <p key={index}>{ skill.skillName }
                    <br></br>
                    {skill.superSkilled ?
                        <span>They are super skilled at this!</span>
                        : <span>They are pretty good at this!</span>}
                    </p>
                ))
            }
        </div>
    )
}

export default Display;