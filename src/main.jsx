import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // Importing the App component

const rootElement = document.getElementById('root');  // Using the id "root"
const appRoot = ReactDOM.createRoot(rootElement);

appRoot.render(<App />);
