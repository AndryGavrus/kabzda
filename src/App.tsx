import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  console.log('App rendering');
  
  return (
    <div className="App">
      <AppTitle/>
      <Rating />
      <Accordion />
    </div>
  );
}

export const AppTitle = () => {
  console.log('AppTitle rendering');

  return (
    <>This is App component</>
  )
}


export const Rating = () => {
  console.log('Rating rendering');

  return (
    <>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </>
  )
}

export const Star = () => {
  console.log('Star rendering');

  return (
    <div>Star</div>
  )
}


export const Accordion = () => {
  console.log('Accordion rendering');

  return (
    <div>
      <AccordionTitle/>
      <AccordionBody/>
    </div>
  )
}

export const AccordionTitle = () => {
  console.log('AccordionTitle rendering');

  return (
    <h3>Menu</h3>
  )
}

export const AccordionBody = () => {
  console.log('AccordionBody rendering');

  return (
    <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>  
  )
}

export default App;
