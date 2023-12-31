import React from 'react'

function NaturalNumber(props) {
  return (
    <>
      <p className='mt-2 text-center'>
        Natural numbers are a part of the number system which includes all the positive integers from 1 till infinity and are also used for counting.
        <br></br>
        They form the foundation of our numerical systems and are the numbers children learn when they  start counting
      </p>
      <p>
        <b>Defination: </b>
        <span>
        Natural numbers are part of real numbers, that include only the positive integers <b>i.e. 1, 2, 3, 4,5,6, ………</b>. excluding zero, fractions, decimals and negative numbers 1.
        </span>
      </p>
      <span>
        <b>Summary: </b>
        <ul>
          <li>Natural numbers are the positive integers from 1 to infinity <code> ∞ </code>. </li>
          <li>They Exclude Zero <code>{`(0)`}</code></li>
        </ul>
      </span>
      <p>
        <b>Symbolic Representation: </b>
        <span>
          The Set of natural numbers is denoted by the letter <code>"N"</code>.
          <br></br>In Roster form : 
          <code>  N = {"{1,2,3,4,5,6,7,8,9,10,...."}</code>
        </span>
      </p>
      <hr/>


    </>
  )
}

export default NaturalNumber