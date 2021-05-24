import './App.css';
import React from 'react';
import ColorForm from './components/ColorForm';
// import Display from './components/Display';

function App() {
  const color = "red";

  return (
    <div className="App">
      <h1>Welcome to Box Generator!</h1>
      <h3>Please add the color of the box you'd like to generate below.</h3>
      <ColorForm />
      {/* <Display color={color} /> */}
    </div>
  );
}

export default App;
