import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const[luke, setLuke] = useState({});
  const [starships, setStarships] = useState([]);
  const [ getLukesFather, setGetLukesFather] = useState(false);

  // const getLukeSkywalker = () => {
    useEffect(() => {
      let url = "https://swapi.dev/api/people/1/";
      if(getLukesFather){
        url = "https://swapi.dev/api/people/4/";
      }


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
  }, [getLukesFather]); //this will run the useEffect if getLukesFather changes value; if you use empty array, it will only useEffect once when started

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

  const getLukesFatherClick = () => {
    if (getLukesFather) {
      setGetLukesFather(false);
    }
    else{
      setGetLukesFather(true);
    }
  };

  return (
    <div className="App">
      <button onClick={(e)=>getLukesFatherClick()}>Get Luke's Father</button>
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
