import './App.css';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Projects from './views/Projects';


function App() {
  return (
    <div className="App">
      <h1>Welcome to My Portfolio</h1>
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <MainContent />
      {/* Projects */}
      <Projects />
    </div>
  );
}

export default App;
