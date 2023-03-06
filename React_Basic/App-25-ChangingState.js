import React, {Component} from 'react';

class App extends Component {
        constructor() {
                super();
                this.state = { displayStatus: false};
                console.log ('Component this work', this);

                this.toggleDisplayStatus = this.toggleDisplayStatus.bind(this);
        }

        toggleDisplayStatus() {
                this.setState({displayStatus: !this.state.displayStatus});
        }

        render(){
                return(
                        <div>
                                <h1>Welcome to FIFA World Cup 2022 AFC Qualifer</h1>
                                {
                                        this.state.displayStatus ?(
                                               <div>
                                                        <p><h4>The Asian section of the 2022 FIFA World Cup qualification acts as qualifiers for the 2022 FIFA World Cup, to be held in Qatar, for national teams which are members of the Asian Football Confederation (AFC). Apart from Qatar (who qualified automatically as hosts), a total of 4.5 slots (4 direct slots and 1 inter-confederation play-off slot) in the final tournament are available for AFC teams.</h4></p> 
                                                        <button onClick={this.toggleDisplayStatus}>Less</button>
                                               </div>
                                        ) : (
                                                <div>
                                                        <button onClick={this.toggleDisplayStatus}>More</button>
                                                </div>
                                        )
                                }
                        </div>
                )
        }
} 

export default App;