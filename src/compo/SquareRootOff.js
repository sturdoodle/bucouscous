import React from 'react'

function SquareRootOff(props) {
  return(
    <>
    <span>{Math.floor(Math.sqrt(props.num))} squareRoot of {props.num}  </span>
    </>
  )
}

export default SquareRootOff