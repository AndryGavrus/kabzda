import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Accordion } from './components/accordion/Accordion';
import { Rating } from './components/rating/Rating';

function App() {
  console.log('App rendering');
  
  return (
    <div className="App">
      <SectionTitle title = 'This is App component'/>
      <SectionTitle title = 'My friends'/>
      Article 1
      <Rating value ={3}/>
      <Accordion title = 'Menu'/>
      Article 2
      <Rating value ={4}/>
    </div>
  );
}

const SectionTitle = (props: any) => {
  console.log('SectionTitle rendering');

  return (
    <h1>{props.title}</h1>
  )
}

export default App;
