import './App.css';
import React, {useState} from 'react';
import ColorForm from './components/ColorForm';
import Display from './components/Display';

function App() {
  const name = "Jess";
  const[boxList, setBoxList] = useState([]);

  return (
    <div className="App">
      <h1>Welcome to Box Generator!</h1>
      <h3>Please add the color of the box you'd like to generate below.</h3>
      <ColorForm boxList = {boxList} setBoxList = {setBoxList}/>
      <Display name={name} boxList = {boxList} />
    </div>
  );
}

export default App;
