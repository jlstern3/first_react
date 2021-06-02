import './App.css';

function App() {
  // Function for determining if coin toss is heads or tails
  function tossCoin(){
    return Math.random() > 0.5 ? "heads" : "tails";
  }

    
  // Platform code - function for tracking heads/tails
  function fiveHeadsSync(){
    return new Promise((resolve, reject) => {
    // will resolve when headsCount=5
    let headsCount = 0;
    let attempts = 0;
    // will reject when attemps > maxAttempts
    let maxAttempts = 100;

    while (headsCount < 5 && attempts <= maxAttempts){
      attempts ++;
      let result = tossCoin();
      console.log(`${result} was flipped `);
      if (result === "heads"){
        headsCount++;
      } 
      else{
        headsCount = 0;
      }
    }
    if (attempts <= maxAttempts){
      resolve(`It took ${attempts} tries to flip five "heads" in a row`)
    }
    else{
      reject(`It took too many attempts to try to flip "heads" five times in a row.  You've exceeded the ${maxAttempts} flip limit.`)
    }
    });
  }

  fiveHeadsSync()
    .then ((res) => console.log(res))
    .catch ((err) => console.log(err));

  console.log("Let's see when this runs now!");


  return (
    <div className="App">
      <h2>Coin Flipping</h2>
      <h4>The results will be revealed in the Console</h4>
      <p>(so go check there!)</p>
    </div>
  );
}

export default App;
