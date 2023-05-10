import React  from "react";
import { useState } from "react";
import useTitlecount from "./useTitlecount";

const Customhook=()=>{

  const[count,setcount]=useState(0);
 

  const handleclick=()=>{
    setcount(count+1);
  }
 
  //custom hook 
  useTitlecount(count);

  return(
    <>
    <div className="focus">
      <h1>Custom hook</h1>
      <p>{count}</p>
      <button onClick={handleclick}>Click test</button>
    </div>
    </>
  );
}

export default Customhook;


// when you need to use same hook and functionality in multiple components then you can create your own custom hooks to reduce the lines of codes,

//custom hook is basically a new component but you need to use the use along with your custom hook name 
// like ---> useTitlecount

//Custom hook can be called component or javascript function




// let a=["1","1","2","3","3","1"];

// let unique=a.filter((item,i,ar)=>ar.indexOf(item)===i);
// console.log(unique);
            // output ["1","2","3"];

// shortcut ------>
// let a= new Set (["1","1","2","3","3","1"]);
// <output--------->
//                  {"1","2",'3'}