import { useState } from "react";
import "./App.css";

function App() {
  let [countNumber, setCountNumber] = useState(0);
  // let countNumber = 0; //! Old Variable 🤨
  const increaseNumber = () => {
    // countNumber++; //! Old Method 👀
    setCountNumber(countNumber + 1); //? New Method 🤩
  };
  const decreaseNumber = () => {
    // countNumber--; //! Old Method 👀
    //? If number reached to 0 then it auto return
    if (countNumber <= 0) {
      return;
    }
    setCountNumber(countNumber - 1); //? New Method 🤩
  };
  return (
    <>
      <h1>First React Js Project 🎯</h1>
      <p>The Count Number Project</p>
      <div className="mainContent">
        <strong>Number : {countNumber}</strong>
        <button className="mainButtons" onClick={increaseNumber}>
          Increase Number
        </button>
        <button className="mainButtons" onClick={decreaseNumber}>
          Decrease Number
        </button>
      </div>
    </>
  );
}

export default App;
