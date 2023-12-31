import {useState } from "react";
import EvenOdd from "./compo/EvenOdd";
import IntegerToRoman from "./compo/IntegerToRoman";
import IsPalindrome from "./compo/IsPalindrome";
import NaturalNumber from "./compo/NaturalNumber";
import NumberToHexaDecimal from "./compo/NumberToHexaDecimal";
import PerfectSquare from "./compo/PerfectSquare";
import PrimeNumber from "./compo/PrimeNumber";
import SquareRootOff from "./compo/SquareRootOff";
import SquareValueOfNumber from "./compo/SquareValueOfNumber";


function App() {
  const [numberr, setnumber] = useState("");

  function MainFunction() {
    if (numberr !== "") {
      let s1=parseFloat(numberr)
      if(numberr.length<=9){
      return (
        <>
          <p className="text-center  display-5">Results</p>
          <EvenOdd num={s1} />
          <IntegerToRoman num={s1} />
          <IsPalindrome num={s1} />
          <NaturalNumber num={s1} />
          <NumberToHexaDecimal num={s1} />
          {/* <PerfectSquare num={s1} /> */}
          {/* <PrimeNumber num={s1} /> */}
          {/* <SquareRootOff num={s1} /> */}
         
          {/* <SquareValueOfNumber num={s1} /> */}
        </>
      )
    }
  }
}


  return (
    <>
      <div className="App text-center mt-3">
        <input placeholder="Enter Digit" value={numberr} onChange={(e) => setnumber(e.target.value)}></input>
      </div>
      <hr></hr>
      <MainFunction />
    </>
  );
}

export default App;
