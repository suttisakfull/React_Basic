import React from 'react';
import './App.css';

class App extends React.Component {
   constructor() {
      super();
      this.state = {
         mydata: 
         [
            {
               "id": 1,
               "driver": "Alexander Albon Ansusinha",
               "team": "Aston Martin Red Bull Racing"
            },
            {
                "id": 2,
                "driver": "Charles Leclerc",
                "team": "Scuderia Ferrari"
            },
            {
                "id": 3,
                "driver": "Lando Norris",
                "team": "McLaren"
            }
         ]
      }
   }

   render() {
      return (
         <div>
            <Header/>
            <table>
               <tbody>
                  {this.state.mydata.map((person, i) => <Table key = {i} 
                     mydata = {person} />)}
               </tbody>
            </table>
         </div>
      );
   }
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>::: F1 Rookie Driver :::</h1>
         </div>
      );
   }
}

class Table extends React.Component {
   render() {
      return (          
            <tr>
                <td>{this.props.mydata.id}</td>
                <td>{this.props.mydata.driver}</td>
                <td>{this.props.mydata.team}</td>
            </tr>               
      );
   }
}

export default App;