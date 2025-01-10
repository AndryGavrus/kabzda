import React, { useState } from 'react';

type UncontrolledRatingPropsType = {
  
}
export const UncontrolledRating = (props: UncontrolledRatingPropsType) => {
  console.log('Rating rendering');
  let [value, setValue] = useState(0)
  return (
    <div>
      <Star selected={value > 0} /> <button>*</button>
      <Star selected={value > 1} /> <button>*</button>
      <Star selected={value > 2} /> <button>*</button>
      <Star selected={value > 3} /> <button>*</button>
      <Star selected={value > 4} /> <button>*</button>
    </div>
  )
};

type StarPropsType = {
  selected: boolean
}
const Star = (props: StarPropsType) => {
  console.log('Star rendering');
  if (props.selected) {
    return (
      <span><b>Star </b></span>
    )
  }
  return (
    <span>Star </span>
  )
}