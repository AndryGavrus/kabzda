import React from 'react';

type AccordionPropsTyre = {
  titleValue: string
  collapsed: boolean
}
export const Accordion = (props: AccordionPropsTyre) => {
  console.log('Accordion rendering');
  return (
    <div>
      <AccordionTitle title={props.titleValue} />
      {!props.collapsed && <AccordionBody />}
    </div>
  )
  // if (props.collapsed === true) {
  //   return (
  //     <AccordionTitle title={props.titleValue} />
  //   )
  // }
  // return (
  //   <div>
  //     <AccordionTitle title={props.titleValue} />
  //     <AccordionBody />
  //   </div>
  // );
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