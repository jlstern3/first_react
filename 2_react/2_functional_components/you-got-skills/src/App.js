import './App.css';
import React, {useState} from 'react';
import Footer from './components/Footer';
import Input from './components/Input';
import Display from './components/Display';


function App() {
  const name = "Jess";
  const [skillList, setSkillList] = useState([]);

  return (
    <div className="App">
      <h1>You Got Skills</h1>
      <Input name={name} skillList = {skillList} setSkillList = {setSkillList} />
      <Display name={name} skillList = {skillList} setSkillList = {setSkillList}/>
      <Footer />
    </div>
  );
}

export default App;
