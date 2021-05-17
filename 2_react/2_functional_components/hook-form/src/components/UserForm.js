import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConf, setPasswordConf] = useState("");
    const [firstNameError, setFirstNameError] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, passwordConf };
        console.log("Welcome" + newUser);
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2){
            setFirstNameError("First name must be at least two characters.");
        }else{
            setFirstNameError("");
        }
    }

    return (
        <div className="wrapper">
            <h1>Hook Form</h1>
            <form onSubmit={createUser} className="user-form">
                <div className="input-line"><label>First Name </label><input type="text" onChange={(e) => setFirstName(e.target.value)} /></div>
                <div className="input-line"><label>Last Name </label><input type="text" onChange={(e) => setLastName(e.target.value)} /></div>
                <div className="input-line"><label>Email </label><input type="text" onChange={(e) => setEmail(e.target.value)} /></div>
                <div className="input-line"><label>Password </label><input type="text" onChange={(e) => setPassword(e.target.value)} /></div>
                <div className="input-line"><label>Password Confirmation </label><input type="text" onChange={(e) => setPasswordConf(e.target.value)} /></div>
            </form>
            <div className="data-displayed">
                <h2>Your Form Data</h2>
                <h3>First Name: {firstName}</h3>
                <h3>Last Name: {lastName}</h3>
                <h3>Email: {email}</h3>
                <h3>Password: {password}</h3>
                <h3>Password Confirmation: {passwordConf}</h3>
            </div>
        </div>
    )
}

export default UserForm;