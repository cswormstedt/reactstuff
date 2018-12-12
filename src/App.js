import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from './Greetings.jsx';
import SimpleForm from './SimpleForm.jsx';




function App() {
  return (
    <div className="App">
      <div>
    <img src={logo} className="App-logo" alt="logo" />
           <p>
             Edit <code>src/App.js</code> and save to reload.
           </p>
           <a
             className="App-link"
             href="https://reactjs.org"
             target="_blank"
             rel="noopener noreferrer"
           >
             Learn React

       </a>   
       
        <SimpleForm />
      </div>
        
    </div>

  );
}

export default App;
