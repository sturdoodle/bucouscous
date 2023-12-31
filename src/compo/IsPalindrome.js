import React from 'react'

function IsPalindrome(props) {
  let numToString = props.num.toString();
  let result = numToString.split("").reverse().join("");
  if (result === numToString) {
    return <>
      <p>{props.num} is an<span className='text-success'> Palindrome </span>

      </p>
      <hr />
    </>
  }
  else {
    return (
      <>
        <p>
          {props.num} is <span className='text-danger'>not an Palindrome</span>

        </p>
        <hr />
      </>
    )
  }
}

export default IsPalindrome
