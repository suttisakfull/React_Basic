import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DriverLists from './Driver-lists';

class App extends Component {
    render() {
      return (
        <div className="container">
            <DriverLists />
        </div>
      );
    }
}
export default App;
