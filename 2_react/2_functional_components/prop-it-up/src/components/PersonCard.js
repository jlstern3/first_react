import React, {useState} from 'react';


const PersonCard=(props) => {
    const[birthdayAge, setBirthdayAge]=useState(props.age);
    const handleClick = () => {
        setBirthdayAge(birthdayAge+1);
    }
    return(
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <h3>Age: {birthdayAge}</h3>
            <h3 className="hair-color">Hair Color: {props.hairColor}</h3>
            <button onClick={handleClick}>Birthday Button for {props.firstName} {props.lastName}</button>
        </div>
    )
}

export default PersonCard