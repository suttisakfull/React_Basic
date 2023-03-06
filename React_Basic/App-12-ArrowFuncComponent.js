import React from 'react';
import ChildComponent1 from './ChildComponent1';
import ChildComponent2 from './ChildComponent2';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <ChildComponent1/>
            <ChildComponent2/>
        </div>
    )
}

export default App;