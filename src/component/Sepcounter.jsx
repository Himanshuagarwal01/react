import React, { useState } from "react";

function Sepcounter(){

    const [count1,setcount1]=useState(0);
    const [count,setcount]=useState(0);

    function handleclick(){
      setcount1(count1+1);
    }

    function handleclick2(){
      setcount(count+1);
    }
    return(
        <div>
            <h1>Counter that updates the counter separately</h1>
            <button onClick={handleclick}>Clicked {count1} times</button><br/>
            <button onClick={handleclick2} >Clicked {count} times</button>
        </div>
    );
}

export default Sepcounter;