import './App.css';
import React, {useState} from 'react';
import Tabs from './components/Tabs';
import Display from './components/Display';


function App() {
  const tabsArray = [
    {label: "Tab 1", content: "I do it for myself, I'm dancing for no one else, I do it for myself, baby, ahh.  Turn the lights down, and turn it up to something we know, never felt so crazy, haven't slept in days ,I'm burning up breaking through the floor.  When I find myself acting up, when I find myself out of touch.  I'm sick of love songs, pushing up daisies.  And I've just about had enough.I do it for myself, I'm dancing for no one else, I do it for myself, baby, ahh.  Turn the lights down, and turn it up to something we know, never felt so crazy, haven't slept in days ,I'm burning up breaking through the floor.  When I find myself acting up, when I find myself out of touch.  I'm sick of love songs, pushing up daisies.  And I've just about had enough. "},
    {label: "Tab 2", content: "Tab 2 Content"},
    {label: "Tab 3", content: "Tab 3 Content"},
    {label: "Tab 4", content: "Tab 4 Content"},
    {label: "Tab 5", content: "Tab 5 Content"},
  ];

  const[allTabs, setAllTabs] = useState(tabsArray);

  const[currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <div className="App">
      <h1>Choose your tab</h1>
      <Tabs 
      allTabs = {allTabs} 
      currentTabIndex = {currentTabIndex} 
      setCurrentTabIndex = {setCurrentTabIndex}  />
      <Display 
      allTabs = {allTabs} 
      currentTabIndex = {currentTabIndex} />

    </div>
  );
}

export default App;
