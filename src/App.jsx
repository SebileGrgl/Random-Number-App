import { useState } from "react";
import "./App.css";

function App() {
  const [minNumber, setMinNumber] = useState(0);
  const [maxNumber, setMaxNumber] = useState(0);
  const [randomNumber, setRandomNumber] = useState(0);

  function getRandomNumber() {
    setRandomNumber(
      Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber)
    );
  }
  return (
    <>
      <div className="container">
        <div className="randomNum">
          <p>
            Random Number: <span>{randomNumber}</span>
          </p>
        </div>
        <div className="minmaxBox">
          <div className="minNumber">
            <p>Min:</p>
            <input
              onChange={(e) => {
                setMinNumber(parseInt(e.target.value));
              }}
              type="number"
              value={minNumber}
            />
          </div>
          <div className="maxNumber">
            <p>Max:</p>
            <input
              onChange={(e) => {
                setMaxNumber(parseInt(e.target.value));
              }}
              type="number"
              value={maxNumber}
            />
          </div>
        </div>
        <div className="buttonBox">
          <button onClick={getRandomNumber}>Get Random Number</button>
        </div>
      </div>
    </>
  );
}

export default App;
