import React from "react";

function Button2(){ 
    function handleclick(){
        alert("Hi Welcome!!!");
    }

    return(
        <>
        <button type="button" onClick={handleclick}> 
            click me
        </button>
        </>
    );
}

export default Button2;