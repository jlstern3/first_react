import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then((response) =>{
      response.json()
        .then((jsonResponse) => {
          setPokemon(jsonResponse);
        })
        .catch((jsonError) => {
          console.log(jsonError);
        });
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);
  
  return (
    <div className="App">
      {
        pokemon.map((character, index) => (
          <ul>
            <li key={index}>{character.name}</li>
          </ul>
        ))
      }
      
    </div>
  );
}

export default App;
