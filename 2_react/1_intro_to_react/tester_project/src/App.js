import './App.css';
import Track from './components/Track';

function App() {
  return (
    <div className="App">
      {/* Using an inline style object for styling--first set of curly brackets says I'm using JS, next sets creates JS object, then key:value pairs*/}
      <div style={
        {
          backgroundColor: "green",
          text: "white",
          marginTop: "34px",
          width: "350px",
          height: "400px",
          display: "inline-block",
          verticalAlign: "top",
          margin: "15px",
        }
      }>Jessica Stern</div>
      <div className="right-div">
        <Track trackName={"Web Fundamentals"} instructor = {"Will"} />
        <Track trackName={"MERN"} instructor = {"Kevin"}/>
        <Track trackName={"Python"} instructor = {"Sal"}/>
        <Track trackName={"Java"}/>
        </div>
    </div>
  );
}

export default App;
