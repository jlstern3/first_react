import React, { useState } from 'react';


const SingleProject = (props) => {
    // creating new states
    // const [ getter, setter ] = useState(initial_value);
    const [ likes, setLikes ] = useState(0);
    const [ name, setName ] = useState(props.name)

    const addLikesHandler = (event) => {
        console.log("adding a like: " + likes);
        setLikes (likes + 1);
    }

    return(
        <div className="projectClass">
            <h4>{name}</h4>
            {/* When the button is clicked, it triggers an event */}
            <button onClick = {(event) => addLikesHandler(event)}>Like Project</button>
            <p>Likes: {likes}</p>
            <p>Description: </p>
            <p>{props.description}</p>
            {/* The following allows you to update immediately while you're typing  */}
            <input type="text" value={name} onChange={(event)=> setName(event.target.value)} />
            {/* Event happened, target is what that event happened on (so in this example, the input that was changed), value is the text user is typing in */}
        </div>
    )
}

export default SingleProject;