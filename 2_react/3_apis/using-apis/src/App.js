import './App.css';
import React, {useState} from 'react';

function App() {
  const[luke, setLuke] = useState({});
  const [starships, setStarships] = useState([]);

  const getLukeSkywalker = () => {
    fetch("https://swapi.dev/api/people/1/")
    .then((response) => {
      console.log(response);
      response.json()
          .then((jsonResponse) => {
            console.log(jsonResponse);
            setLuke(jsonResponse);
          })
          .catch((jsonError) => {
            console.log(jsonError);
          });
    })
    .catch((error) => {
      console.log(error);
    });
    console.log("Let's relax while we wait for swapi to return data!");
  }

  const getStarships = () => 
    fetch("https://swapi.dev/api/starships")
    .then((response) => {
      response.json()
          .then((jsonResponse) => {
            setLuke(jsonResponse);
            setStarships(jsonResponse.results);
          })
          .catch((jsonError) => {
            console.log(jsonError);
          });
    })
    .catch((error) => {
      console.log(error);
    });
    console.log("Let's relax while we wait for swapi to return data!");
  }

  return (
    <div className="App">
      <button onClick={(e)=>getLukeSkywalker()}>Get Luke Skywalker</button>
      <button onClick={(e)=>getStarships()}>Get Starships</button>

      <hr />
      <p>Name: {luke.name}</p>
      <p>Height: { luke.height }</p>
      {
        starships.map((ship, index) => (
          <div>
            <h4 key={index}>{ship.name}</h4>
            <p>Number of Passengers: {ship.passengers}</p>
          </div>
        ))     
      }
    </div>
  );


export default App;
