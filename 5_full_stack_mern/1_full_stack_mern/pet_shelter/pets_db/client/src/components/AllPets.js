import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';


const AllPets = (props) => {
    //create state to hold all pets
    const [pets, setPets] = useState([]);

    //useEffect so info updates upon initial rendering of page
    //useEffect is a promise
    useEffect(() => {
        //axios route to get all movies from backend
        axios.get("http://localhost:8000/")

            //set new data in state (setPets) upon success
            .then((res) => {
                console.log("server is returning backend data for AllPets")
                console.log(res.data);
                setPets(res.data);
            })
            //catch error
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
                    {/* map through pets to display all pets */}
                    {
                        pets.map((pet, index) => (
                            <tr key={index}>
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                                {/* button/link next to each pet for pet details */}
                                {/* button/link next to each pet for edit pet */}
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