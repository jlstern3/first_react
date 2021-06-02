import './App.css';

function App() {

  function fiveHeads(){
    return new Promise ((resolve, reject) => {
      // my code here
    });
  }

  fiveHeads()
    .then( res => console.log(res))
    .catch( err => console.log(err));
  console.log("When does this run now?");
  
  return (
    <div className="App">
      <h2>Hello World</h2>
    </div>
  );
}

export default App;
