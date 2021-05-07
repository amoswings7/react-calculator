import React from 'react'
import './App.css';
import Display from './components/Display'
import Calculator from './components/Calculator'
import {InforContext} from './components/InforContext';



function App() {
  return (
    <InforContext>
    <div className="App">
      <h1 id='header'>Calculation is your Hands</h1>
      <div className='container'>
        <Display/>
        <Calculator/>
      </div>
    </div>
    </InforContext>
  );
}

export default App;
