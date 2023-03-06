import React from 'react';  
import styles from './myStyles.module.css';   
  
class App extends React.Component {  
  render() {  
    return (  
      <div>  
      <h1 className={styles.mystyle}>::: Web Application Development :::</h1>  
      <p className={styles.parastyle}>-- React Programming --</p> 

      </div>  
    );  
  }  
}  
export default App;  