import React, { useState } from "react";
import "./App.css";
import { contract } from "./ethers"; // Import the contract instance from ethers.js

function App() {
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);

  const handlePlay = async () => {
    try {
      const tx = await contract.play(); // Call the 'play' function of your smart contract
      await tx.wait(); // Wait for the transaction to be mined

      // Handle the result of the function call
      // Update 'result' and 'history' based on the game result
    } catch (error) {
      console.error("Error calling smart contract function:", error);
      // Handle errors gracefully
    }
  };

  return (
    <div className="App">
      <h1>Rock Paper Scissors Game</h1>
      <div>
        <button onClick={handlePlay}>Play</button>
      </div>
      <p>Result: {result}</p>
      <p>Game History: {history.join(", ")}</p>
    </div>
  );
}

export default App;
