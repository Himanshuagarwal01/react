import React, { useState } from "react";

const Usestate=()=>{
    const [name,setname]=useState("Himanshu Agarwal");
    const handleclick=()=>{
        // setname("clicked done ");
        (name==="Himanshu Agarwal")? setname("Click done"):setname("Himanshu Agarwal");
    }
    

    return(
        <div>
            <h1>{name}</h1>
            <button className="btn" onClick={handleclick}> Click me </button>
        </div>
    );
}

export default Usestate;