import React, { useState } from "react";


function Statelifestyle(){
    const[headingText,setheading]=useState("Hello");
    const[isMouseover,setMouseOver]=useState(false);

    function handleclick(){
        return(
        
            setheading("Submitted your name successfully")
        );
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
    return(
        <>
        <div id="hooks">
        <h1>{headingText}</h1>
        
        <input type="text" id="name"placeholder=" Enter your name"></input><br/>
        <button type="submit" style={{
            backgroundColor:isMouseover?"yellow":"white"}}
            onClick={handleclick} 
            onMouseOver={handMouseOver} 
            onMouseOut={handlemouseOut}>Submit</button>
            </div>
        </>
    );
}

export default Statelifestyle;