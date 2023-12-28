import React from 'react'

function NumberToHexaDecimal(props) {
  // console.log(parseFloat(props.num).toString(16),"Hexa")
  return (
    <div>
      NumberToHexaDecimal is  {props.num.toString(16)}
    </div>
  )
}

export default NumberToHexaDecimal
