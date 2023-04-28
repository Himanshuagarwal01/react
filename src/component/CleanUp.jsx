import React, { useEffect, useState } from "react";

const Cleanup=()=>{

    const[widthCount,setwidthCount]=useState(window.screen.width);


    const actualwidth=(()=>{
        // console.log("i am width");
        setwidthCount(window.innerWidth);
    });

    useEffect(()=>{
        window.addEventListener("resize",actualwidth);
        return ()=>{
            window.removeEventListener("resize",actualwidth);
        }
    });
                                
       
    return (
        <div>
            <p>The actual size of the window is:</p>
            <h1>{widthCount}</h1>
        </div>
    );
}

export default Cleanup;