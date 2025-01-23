import React from 'react';

type AccordionPropsTyre = {
  titleValue: string
  collapsed: boolean
  onChange: (collapsed: boolean) => void
  items: ItemType[]
}

export type ItemType = {
  title: string
  value: any
}

export const Accordion = (props: AccordionPropsTyre) => {
  console.log('Accordion rendering');
  return (
    <div>
      <AccordionTitle title={props.titleValue} onChange={()=>{props.onChange(!props.collapsed)}}/>
      {!props.collapsed && <AccordionBody items={props.items} />}
    </div>
  )
  };

type AccordionTitlePropsType = {
  title: string
  onChange: () => void
}
const AccordionTitle = (props: AccordionTitlePropsType) => {
  console.log('AccordionTitle rendering');

  return (
    <h3 onClick={()=>{props.onChange()}}>{props.title}</h3>
  )
}

type AccordionBodyPropsTyre = {
  items: ItemType[]
}

const AccordionBody = (props: AccordionBodyPropsTyre) => {
  console.log('AccordionBody rendering');

  return (
    <ul>
      {props.items.map((i, index)=> <li key={index}>{i.title}</li>)}
    </ul>
  )
}