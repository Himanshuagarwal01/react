import React, { useMemo, useState } from "react";

const Usememo=()=>{

  const[add,setadd]=useState(0);
  const[minus,setminus]=useState(100);

  const multiplication=useMemo(function multiply(){
    console.log("*************");
    return add*10;

  },[add])

  return(
    <div>
      <h1>Learning useMemo</h1>
      {multiplication}
      <button onClick={()=>setadd(add+1)}>Adding</button>
      <span>{add}</span>
      <br/>
      <button onClick={()=>setminus(minus-1)}>Subtration</button>
      <span>{minus}</span>
    </div>
  );
}

export default Usememo;

//syntax-->
//         const cachedValue = useMemo(calculateValue, dependencies)

// when you recall the same function with same dependencies then it call the function from the cached memory to enhance the performance of the app.