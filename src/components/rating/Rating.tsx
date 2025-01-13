import React from 'react';

type RatingPropsType ={
  value: number
  onClick: (value: number) => void
}
export const Rating = (props: RatingPropsType) => {
  console.log('Rating rendering');
  return (
    <div>
      <Star selected={props.value > 0} onClick={()=>{props.onClick(1)}}/>
      <Star selected={props.value > 1} onClick={()=>{props.onClick(2)}}/>
      <Star selected={props.value > 2} onClick={()=>{props.onClick(3)}}/>
      <Star selected={props.value > 3} onClick={()=>{props.onClick(4)}}/>
      <Star selected={props.value > 4} onClick={()=>{props.onClick(5)}}/>
    </div>
  )
};

type StarPropsType ={
  selected: boolean
  onClick: () => void
}
const Star = (props: StarPropsType) => {
  console.log('Star rendering');
  return <span onClick={props.onClick}>{props.selected ? <b>Star </b> : 'Star '}</span>
}