import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';


const AllPets = (props) => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/")
            .then((res) => {
                console.log("server is returning backend data for AllPets")
                console.log(res.data);
                setPets(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    return (
        <div>
            <Link to="/pets/new" className="add_pet">add a pet to the shelter</Link>
            <h3>These pets are looking for a good home</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pets.map((pet, index) => (
                            <tr key={index}>
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                                <td><Link to={"/pets/" + pet._id}>details | </Link><Link to={"/pets/" + pet._id + "/edit"}>edit</Link> </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>



        </div>
    )
}

export default AllPets;