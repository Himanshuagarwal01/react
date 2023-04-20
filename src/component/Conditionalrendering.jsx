import React from "react";
import Green from "./Green";
import Aqua from "./Aqua";

function Conditionalrendering(){
    let color;
    let iscolor="blue";
    if(iscolor==="green"){
      color=<Green/>
    }
    else{
        color=<Aqua/>
    } 

    return (
        <>
        {color}
        </>
    );
}

export default Conditionalrendering;