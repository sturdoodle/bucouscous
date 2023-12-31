import React from 'react'

function IntegerToRoman(props) {
  // let s1=455;
  var s1 = props.num;
  if (s1 > 0 && s1 <= 3000) {
    var Explainiation = [];
    var romanDict = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    }
    var romanvalue = "";
    var i;
    Explainiation = [s1];
    for (i in romanDict) {
      while (s1 >= romanDict[i]) {
        Explainiation.push([romanDict[i], i])
        romanvalue += i
        s1 -= romanDict[i]
      }
    }
    // console.log(Explainiation)

    return (
      <>
        <p>
          Integer To Roman Value {"=>"}  <span className='text-success lead font-weight-bold'>{romanvalue}</span>
          <br></br>
          Explaination Pending 
        </p>
        <hr />
      </>
    )
  }
  else {
    if (s1 < 1) {
      return (
        <>
          <p>
            <span className='text-danger'>{s1} is less then 1 </span>
          </p>
          <hr />
        </>
      )
    }
    else {
      return (
        <>
          <p>
            <span className='text-danger'>{s1} is greater than 3000</span>
          </p>
          <hr />
        </>
      )
    }
  }
}

export default IntegerToRoman
