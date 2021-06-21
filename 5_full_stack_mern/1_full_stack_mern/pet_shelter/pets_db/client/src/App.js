import './App.css';
import {Router} from '@reach/router';
import AllPets from './components/AllPets';
import PetDetails from './components/PetDetails';
import AddPet from './components/AddPet';
import EditPet from './components/EditPet';

function App() {
  return (
    <div className="App">
      <h1>Pet Shelter</h1>
      <Router>
        <AllPets default path = "/"/>
        <AddPet path="/pets/new" />
        <PetDetails path = "/pets/:id" />
        <EditPet path = "/pets/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
