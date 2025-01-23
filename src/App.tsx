import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Accordion, ItemType } from './components/accordion/Accordion';
import { Rating } from './components/rating/Rating';
import OnOff from './components/onOff/OnOff';
import { UncontrolledAccardion } from './components/accordion/UncontrolledAccardion';
import { UncontrolledRating } from './components/rating/UncontrolledRating';
import UncontrolledOnOff from './components/onOff/UncontrolledOnOff';
import { TrackValueOfUncontrolledInput } from './components/rating/inputElement/TrackValueOfUncontrolledInput';
import { GetValueOfUncontrolledInputByButtonPress } from './components/rating/inputElement/GetValueOfUncontrolledInputByButtonPress';
import { ControlledCheckBox, ControlledInput, ControlledSelect } from './controlled/ControlledFeatures';

function App() {
  console.log('App rendering');

  let [accordionCollapsed, setAccordionCollapsed] = useState(true)
  let [ratingValue, setRatingValue] = useState(0)
  let [onValue, setOnValue] = useState(false)

  const Arr1: ItemType[] = [
    {
      title: 'Andrey',
      value: 1
    }, 
    {
      title: 'BoB',
      value: 2
    },
    {
      title: 'Tuti',
      value: 3
    }
  ]
  return (
    <div className="App">
      <SectionTitle title={'This is App component'} />
      <SectionTitle title={'My friends'} />
      Article 1
      <UncontrolledRating />
      <UncontrolledAccardion titleValue={'Menu'} />
      Article 2
      <UncontrolledRating />
      <UncontrolledOnOff />
      <SectionTitle title={'Controlled'} />
      <OnOff on={onValue} onClick={setOnValue} />
      <Accordion collapsed={accordionCollapsed} titleValue={'Work'} onChange={setAccordionCollapsed} items={Arr1}/>
      <Rating value={ratingValue} onClick={setRatingValue} />
      <TrackValueOfUncontrolledInput />
      <GetValueOfUncontrolledInputByButtonPress />
      <ControlledInput />
      <ControlledCheckBox />
      <ControlledSelect />
    </div>
  );
}

type SectionTitlePropsType = {
  title: string
}
const SectionTitle = (props: SectionTitlePropsType) => {
  console.log('SectionTitle rendering');

  return (
    <h1>{props.title}</h1>
  )
}

export default App;
