import React from "react";

function ChildA(props){
 
    const updatemycount=()=>{
      console.log(props.updateit(props.count+1));
    }
    return (
      <>
      <div className="focus">
      <h2>this is child {props.count}</h2>
      <button  onClick={updatemycount}>click to update 

      </button>
      </div>
      </>
    )
  
}

export default ChildA;