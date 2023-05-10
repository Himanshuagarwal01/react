import React from "react";
function Formatname(){
    const user={
        firstname:"himanshu",
        lastname:"agarwal"
    }
    
    function addname(){
        return `${user.firstname} ${user.lastname}`;
    }

    return (
        <>
        <h1 className="namee">
            hello,{addname()}
        </h1>
        </>
    );
}

export default Formatname;