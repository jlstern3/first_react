import './App.css';
import React from 'react';
import React, {useState} from 'react';

function App() {
  const[luke, setLuke] = useState({});

  const getLukeSkywalker = () =>{
    fetch("https://swapi.dev/api/people/1/")
    .then((response) => {
      console.log(response);
      response.json()
          .then(jsonResponse) => {
            console.log(jsonResponse);
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
      <hr />
      <p>Name: {luke.name}</p>
    </div>
  );
}

export default App;
