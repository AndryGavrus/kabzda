import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      This is App component
      <Rating />
      <Accordion />
    </div>
  );
}


export const Rating = () => {
  return (
    <div>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
  )
}

export const Star = () => {
  return (
    <div>Star</div>
  )
}


export const Accordion = () => {
  return (
    <div>
      <h3>Menu</h3>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  )
}


export default App;
