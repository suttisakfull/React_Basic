import React, { Component } from 'react';  
import PropTypes from 'prop-types'; 

class App extends Component {  
   render() {  
      return (  
          <div>  
              <h1>::: React Props Validation :::</h1>  
              <table>  
                <tr>  
                    <th>Type</th>  
                    <th>Values</th>  
                    <th>Result</th>  
                </tr>                   
                <tr>  
                    <td>String</td>  
                    <td>{this.props.propString}</td>  
                    <td>{this.props.propString ? "true" : "False"}</td>  
                </tr>  
                <tr>  
                    <td>Number</td>  
                    <td>{this.props.propNumber}</td>  
                    <td>{this.props.propNumber ? "true" : "False"}</td>  
                </tr>   
                <tr>  
                    <td>Boolean</td>  
                    <td>{this.props.propBool ? "true" : "False"}</td>  
                    <td>{this.props.propBool ? "true" : "False"}</td>  
                </tr>
                <tr>  
                    <td>Array</td>  
                    <td>{this.props.propArray}</td>  
                    <td>{this.props.propArray ? "true" : "False"}</td>  
                </tr>  
                <tr>  
                    <td>Function</td>  
                    <td>{this.props.propFunc(100)}</td>  
                    <td>{this.props.propFunc(100) ? "true" : "False"}</td>  
                </tr> 
                
             </table>  
        </div>  
        );  
   }  
}  
App.propTypes = {     
    propString: PropTypes.string,
    propNumber: PropTypes.number,  
    propBool: PropTypes.bool.isRequired,
    propArray: PropTypes.array.isRequired,
    propFunc: PropTypes.func,   
}  

App.defaultProps = {       
    propString: "Thailand",
    propNumber: 50,
    propBool: true,
    propArray: ['THA', '-MAS', '-PHI', '-VIE', '-LAO'],  
    propFunc: function(num){return num * 5},    
}  

export default App;  