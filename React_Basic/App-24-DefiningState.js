import React, { Component } from 'react'; 

class App extends Component {  
    constructor() {  
        super();        
        this.state = { displayStatus: true };  
    }  

    render() {
        const status = this.state.displayStatus ? (
            <div>
                <p>
                    <h3>React is an open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.</h3>
                </p>
            </div>
        ): null;
        return (
            <div>
                <h1> Welcome to React !!!</h1>
                {status}
            </div>
        ); 
    }  
}

export default App;  