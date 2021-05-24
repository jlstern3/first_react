import './App.css';
import Display from './components/Display';
import Tabs from './components/Tabs';
import React, {useState} from 'react';


function App() {
  const [tabsArray, setTabsArray] = useState([]);

  return (
    <div className="App">
      <Tabs tabsArray = {tabsArray} setTabsArray = {setTabsArray} />
      <Display tabsArray = {tabsArray} />
    </div>
  );
}

export default App;
