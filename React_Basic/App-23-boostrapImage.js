import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
        const myPic = 'https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF-970-80.jpg.webp'

        return (
                <div className="App">
                        <img class="img-thumbnail" src={ myPic } alt="Cat"/>
                </div>
        );
}

export default App;