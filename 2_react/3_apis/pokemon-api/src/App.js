import './App.css';
import React, {useState, useEffect} from 'react';

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
