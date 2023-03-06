import React from 'react';  
import './App.css';  

/* App.css

body {  
  background-color: #008080;  
  color: yellow;  
  padding: 40px;  
  font-family: Arial;  
  text-align: center;  
}

*/

/* Index.html

<!DOCTYPE html>  
<html lang="en">  
  <head>  
    <title>React Demo</title>  
  </head>  
  <body>  
    <div id="app"></div>  
  </body>  
</html> 

*/

class App extends React.Component {  
  render() {  
    return (  
      <div>  
        <h1>Oympic Games - Gold Medal</h1>  
        <p>Somluck Kamsing (Boxing)</p>
        <p>Wijan Ponlid (Boxing)</p>
        <p>Manus Boonjumnong (Boxing)</p>
        <p>Somjit Jongjohor (Boxing)</p>
      </div>  
    );  
  }  
}

export default App;  