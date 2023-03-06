import React from 'react';
import './App.css';

function App() {
  const myCourse = 'React Programming'

  const myNum1 = 100;
  const myNum2 = 300;
  
  return (
    <div className="App">
      <p>Course : {myCourse}</p>
      <p>Result is : {myNum1 * myNum2}</p>
    </div>
  );
}

export default App;
