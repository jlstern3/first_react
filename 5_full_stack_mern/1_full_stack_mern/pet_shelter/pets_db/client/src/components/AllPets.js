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
            <h3>These pets are looking for a good home</h3>
            {/* {
                pets.map((pet, index) => (
                    <div key={index}>
                        <p>{pet.name}</p>
                    </div>
                ))
            } */}
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
                    pets.map((pet,index) => (
                        <tr key={index}>
                            <td>{pet.name}</td>
                            <td>{pet.type}</td>
                            <td>Placeholder for details and edit active links</td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>

            {/* map through pets to display all pets */}
            {/* button/link next to each pet for pet details */}
            {/* button/link next to each pet for edit pet */}
        </div>
    )
}

export default AllPets;