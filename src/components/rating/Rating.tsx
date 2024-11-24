import React from 'react';

type RatingPropsType ={
  value: number
}
export const Rating = (props: RatingPropsType) => {
  console.log('Rating rendering');
  return (
    <div>
      <Star selected={props.value > 0} />
      <Star selected={props.value > 1} />
      <Star selected={props.value > 2} />
      <Star selected={props.value > 3} />
      <Star selected={props.value > 4} />
    </div>
  )
  // if (props.value === 1) {
  //   return (
  //     <div>
  //       <Star selected={true} />
  //       <Star selected={false} />
  //       <Star selected={false} />
  //       <Star selected={false} />
  //       <Star selected={false} />
  //     </div>
  //   )
  // }
  // if (props.value === 2) {
  //   return (
  //     <div>
  //       <Star selected={true} />
  //       <Star selected={true} />
  //       <Star selected={false} />
  //       <Star selected={false} />
  //       <Star selected={false} />
  //     </div>
  //   )
  // }
  // if (props.value === 3) {
  //   return (
  //     <div>
  //       <Star selected={true} />
  //       <Star selected={true} />
  //       <Star selected={true} />
  //       <Star selected={false} />
  //       <Star selected={false} />
  //     </div>
  //   )
  // }
  // if (props.value === 4) {
  //   return (
  //     <div>
  //       <Star selected={true} />
  //       <Star selected={true} />
  //       <Star selected={true} />
  //       <Star selected={true} />
  //       <Star selected={false} />
  //     </div>
  //   )
  // }
  // if (props.value === 5) {
  //   return (
  //     <div>
  //       <Star selected={true} />
  //       <Star selected={true} />
  //       <Star selected={true} />
  //       <Star selected={true} />
  //       <Star selected={true} />
  //     </div>
  //   )
  // }

  // return (
  //   <div>
  //     <Star selected={false} />
  //     <Star selected={false} />
  //     <Star selected={false} />
  //     <Star selected={false} />
  //     <Star selected={false} />
  //   </div>
  // );
};

type StarPropsType ={
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