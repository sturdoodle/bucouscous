import React from 'react'

function PerfectSquare(props) {
  if(props.num <0){
    return (
      <>
      <span className='text-danger'>{props.num} is not a perfect Square Number</span>
      </>
    )
  }
  else{
    let i=0;
    while(i*i<=props.num){
      if(i*i===props.num){
        return (
          <>
          {props.num} is a perfect Square Number
          </>
        )
      }
      i++;

    }
  }
}

export default PerfectSquare
