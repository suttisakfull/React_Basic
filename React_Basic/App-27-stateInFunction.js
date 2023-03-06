import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = (props) => {
    const stateArr = useState({
          home: '#home',
          course: '#course',
          contact: '#contact',
          about: '#about'
      });
    return (
            <nav className="navbar navbar-expand-lg navbar-blue bg-dark">
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav mx-auto">
                  <a className="nav-item nav-link" href={stateArr[0].home}>Home</a>
                  <a className="nav-item nav-link" href={stateArr[0].course}>Course</a>
                  <a className="nav-item nav-link" href={stateArr[0].contact}>Contact</a>
                  <a className="nav-item nav-link" href={stateArr[0].about}>About</a>
                </div>
              </div>
            </nav>
    );
}
export default App;

