import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <div className="person-cards">
      <PersonCard firstName={"Jessica"} lastName={"Stern"} age={29} hairColor={"Dirty Blonde"}/>
      <PersonCard firstName={"Erin"} lastName={"Huffnagle"} age={33} hairColor={"Blonde"}/>
      <PersonCard firstName={"Rich"} lastName={"Damas"} age={31} hairColor={"Dark Brown"}/>
      <PersonCard firstName={"Jeff"} lastName={"Hurray"} age={27} hairColor={"Brown"}/>
      </div>
    </div>
  );
}

export default App;
