import React, {Component} from 'react';
import './App.css';

class App extends Component {
        constructor(props) {
                super(props);
                this.state = {
                        myTeam: ''
                };
        }

        changeText(event){
                this.setState({
                        myTeam: event.target.value
                })
        }

        render() {
                return(
                        <div className="App">
                                <h2>F1 World Championship</h2>
                                <label htmlFor="name">Enter F1 Team : </label>
                                <input type="text" id="myTeam" onChange={this.changeText.bind(this)}/>
                                <h3>Your Team is {this.state.myTeam}</h3>
                        </div>
                )
        }
}

export default App;