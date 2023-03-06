import React from 'react';
import './App.css';

class App extends React.Component {
   render() {
      return (
         <div className='App'>
            <Header/>
            <Content/> 
            <Footer/>           
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>::: Welcome to FIA F1 World Championship 2021 :::</h1>
         </div>
      );
   }
}
class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>::: Team :::</h2>
            <p>Red Bull Racing</p>
            <p>Mercedes</p>
            <p>Ferrari</p>
            <p>McLaren-Mercedes</p>
            <p>AlphaTauri</p>
         </div>
      );
   }
}
class Footer extends React.Component {
    render() {
       return (
          <div>          
             <h3>-- Create by Fox Sport --</h3>             
          </div>
       );
    }
}

export default App;