import './App.css';
import Display from './components/Display';
import Tabs from './components/Tabs';
import React, {useState} from 'react';


function App() {
  const [tabsArray, setTabsArray] = useState([]);

  return (
    <div className="App">
      <h1>Welcome to the Tabs Assignment!</h1>
      <h3>Please enter the name of your tag and the content you'd like displayed</h3>
      <Tabs tabsArray = {tabsArray} setTabsArray = {setTabsArray} />
      <Display tabsArray = {tabsArray} />
    </div>
  );
}

export default App;
