import React from 'react';
import Post from './Post';
import Comment from './Comment';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Post id="1">
              <Comment userId="1" data="Football"/>
              <Comment userId="2" data="Tennis"/>
              <Comment userId="3" data="Volleyball"/>
            </Post> 
        </div>
    )
}
export default App;
