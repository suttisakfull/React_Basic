import React from 'react';
import './App.css';

function App() {
  const randNum = Math.random();

  return(
    <div className="App">
      {
        randNum < 0.5 ?
        <div>{randNum} is Low Number</div> : 
        <div>{randNum} is High Number</div>
      }
    </div>
  );
}

export default App;
