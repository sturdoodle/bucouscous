import { useEffect, useState } from "react";
import { Evn } from "./log/Evn";
import { Pri } from "./log/Pri";



function App() {
  const  [numberr,setnumber]=useState("");
  const [results,setResults]=useState({});

  useEffect(()=>{
   if(numberr!==""){
    mainFunction(numberr)
   }
  },[numberr])


  function mainFunction(num){
  // call all functions
  let Even=Evn(num);
  let Prime=Pri(num);
  console.log(Prime)
  setResults({evenOdd:Even})
  
  }

  
  return (
    <>
    <div className="App text-center mt-3">
        <input placeholder="Enter Digit"  value={numberr} onChange={(e)=>setnumber(e.target.value)}></input>
    </div>
    <hr></hr>
    <p className="display-6 lead ">Results</p>
      {/* <ul>
        {results.map((data)=>{
          <li>{data}</li>
        })}
      </ul> */}
      <li className="m-3">{results.evenOdd?results.evenOdd:""}</li>
    </>
  );
}

export default App;
