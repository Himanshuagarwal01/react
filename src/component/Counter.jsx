import React, { useState } from "react";

function Counter(){
    const[count,setCount]=useState(0);
    const[isMouseover,setMouseOver]=useState(false);


  function handleClick() {
    setCount(count + 1);
  }

  function handMouseOver(){
    return(
        setMouseOver(true)
    );
}

function handlemouseOut(){
    return (
        setMouseOver(false)
    )
}

 //this code is updating the buttons number of times clicked same in both the buttons..

    return (
      <>
        <div>
        <h1>Counters that update together</h1>
        <button  type="button" count={count} style={{
            backgroundColor:isMouseover?"pink":"white"
        }}
            onClick={handleClick} 
            onMouseOver={handMouseOver} 
            onMouseOut={handlemouseOut} >Clicked {count} times</button><br/>

        
        <button type="button" count={count} style={{
            backgroundColor:isMouseover?"pink":"white"}}
            onClick={handleClick} 
            onMouseOver={handMouseOver} 
            onMouseOut={handlemouseOut} >Clicked {count} times</button><br/>
      </div>
      </>
    );
    
}

export default Counter;