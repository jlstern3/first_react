import './App.css';
import React from 'react';
import ColorForm from './components/ColorForm';

function App() {


  return (
    <div className="App">
      <h1>Welcome to Box Generator!</h1>
      <h3>Please add the color of the box you'd like to generate below.</h3>
      <ColorForm />
    </div>
  );
}

export default App;
