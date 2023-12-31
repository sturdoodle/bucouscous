import React from 'react'

function EvenOdd(props) {
  if (props.num % 2 === 0) {
    return (
    <>
      <span className='text-success'>{props.num}</span>  is <b> Even </b> Number
      <hr/>
    </>
    )
  }
  else {
    return (
    <>
      <span className='text-danger'>{props.num}</span>  is <b>Odd</b> Number
      <hr/>
    </>
    )
  }
}

export default EvenOdd