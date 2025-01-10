import React, { useState } from 'react';

type UncontrolledAccardionPropsTyre = {
  titleValue: string
}

export const UncontrolledAccardion = (props: UncontrolledAccardionPropsTyre) => {
  console.log('Accordion rendering');

  let [collapsed, setCollapsed] = useState(true)

  return (
    <div>
      <AccordionTitle title={props.titleValue} /> <button onClick={()=>{setCollapsed(!collapsed)}}>TOGGEL</button>
      {!collapsed && <AccordionBody />}
    </div>
  )
};

type AccordionTitlePropsType = {
  title: string
}
const AccordionTitle = (props: AccordionTitlePropsType) => {
  console.log('AccordionTitle rendering');

  return (
    <h3>{props.title}</h3>
  )
}

const AccordionBody = () => {
  console.log('AccordionBody rendering');

  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}