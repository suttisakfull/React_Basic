import React, {Component} from 'react';
import './App.css';

class App extends Component {
    render() {
        // Style in JavaScript Object
        const styleObj = {
            color: "Blue",
            backgroundColor: "lightblue",
            padding: "12px",
            fontFamily: "Arial"            
        };

        return (
            <div className="App">
                <h1 style={styleObj}>AFC Champion League 2021</h1>

                <h3>BG Pathum United</h3>
                <h3>Port</h3>
                <h3>Chiangrai United</h3>
                <h3>Ratchaburi Mitr Phol</h3>
            </div>
        )
    }
}

export default App;
