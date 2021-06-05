import './App.css';
import React from 'react';
import {Router} from '@reach/router';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <Home path="/:word"/>
        <Home path="/:word/:font/:bground"/>
      </Router>

    </div>
  );
}

export default App;
