import React from 'react';

type AccordionPropsTyre = {
  titleValue: string
  collapsed: boolean
  onClick: (collapsed: boolean) => void
}
export const Accordion = (props: AccordionPropsTyre) => {
  console.log('Accordion rendering');
  return (
    <div>
      <AccordionTitle title={props.titleValue} onClick={()=>{props.onClick(!props.collapsed)}}/>
      {!props.collapsed && <AccordionBody />}
    </div>
  )
  };

type AccordionTitlePropsType = {
  title: string
  onClick: () => void
}
const AccordionTitle = (props: AccordionTitlePropsType) => {
  console.log('AccordionTitle rendering');

  return (
    <h3 onClick={()=>{props.onClick()}}>{props.title}</h3>
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