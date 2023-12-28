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
      return (
        <>
          <p className="display-6 lead ">Results</p>
          <EvenOdd num={numberr} />
          <IntegerToRoman num={numberr} />
          <IsPalindrome num={numberr} />
          <NaturalNumber num={numberr} />
          <NumberToHexaDecimal num={numberr} />
          <PerfectSquare num={numberr} />
          <PrimeNumber num={numberr} />
          <SquareRootOff num={numberr} />
          <SquareValueOfNumber num={numberr} />
        </>
      )
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
