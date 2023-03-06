// การผ่านค่า Props
import React from 'react';
import Driver from './Driver';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Driver driverName="Daniel Ricciardo" score="50"/>
            <Driver driverName="Lando Norris" score="80"/>
        </div>
    )
}

export default App;
