import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Accordion } from './components/accordion/Accordion';
import { Rating } from './components/rating/Rating';
import OnOff from './components/onOff/OnOff';
import { UncontrolledAccardion } from './components/accordion/UncontrolledAccardion';
import { UncontrolledRating } from './components/rating/UncontrolledRating';

function App() {
  console.log('App rendering');

  let [accordionCollapsed, setAccordionCollapsed] = useState(true)
  let [ratingValue, setRatingValue] = useState(0)
  
  return (
    <div className="App">
      <SectionTitle title = {'This is App component'}/>
      <SectionTitle title = {'My friends'}/>
      Article 1
      <UncontrolledRating/>
      <UncontrolledAccardion titleValue = {'Menu'} />
      <UncontrolledAccardion titleValue = {'Friends'}/>
      Article 2
      <UncontrolledRating/>
      <OnOff/>
      <OnOff/>
      <OnOff/>
      <Accordion collapsed={accordionCollapsed} titleValue={'Work'} onClick={setAccordionCollapsed}/>
      <Rating value={ratingValue} onClick={setRatingValue}/>
    </div>
  );
}

type SectionTitlePropsType ={
  title: string
}
const SectionTitle = (props: SectionTitlePropsType) => {
  console.log('SectionTitle rendering');

  return (
    <h1>{props.title}</h1>
  )
}

export default App;
