import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


    let comments = [
        "Hey there",
        "Whats Up",
        "conect Me",
        "afrazahmad021@gmail.com"
    ]

ReactDOM.render(<App comments={comments}> </App>, document.getElementById('root'));
registerServiceWorker();
