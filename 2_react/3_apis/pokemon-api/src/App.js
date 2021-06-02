import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => {
        return response.json()
      })
      .then(response => {
        setPokemon(response.results)
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <div className="App">
      <h1>108 Pokemon, Named!</h1>
      <div className="names">
        {
          pokemon.map((character, index) => (
            <ul>
              <li key={index}>{character.name}</li>
            </ul>
          ))
        }
      </div>

    </div>
  );
}

export default App;
