import React, { Component } from 'react';
import './App.css';

class App extends Component{  
  render(){  
    var myStyle = {  
        fontSize: 50,  
        fontFamily: 'Courier',  
        color: '#33E0FF'  
     }  
     return (  
        <div className="App">  
          {/* This is a comment in JSX */}   
           <h1 style = {myStyle}>Welcome to React Programming</h1>  
        </div>  
     );  
  }  
}  
export default App;  