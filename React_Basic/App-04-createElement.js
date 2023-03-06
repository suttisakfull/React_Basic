import React from 'react';
import './App.css';

function App() {
  return (
    React.createElement(
      'div',
      {className: 'App'},
      React.createElement('p', null, 'App Component Content with createElement.')
    )
  );
}

export default App;
