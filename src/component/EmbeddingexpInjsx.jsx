import React from "react";
function Formatuser(){
    const user={
        firstname:"himanshu",
        lastname:"agarwal"
    }
    
    function addname(){
        return `${user.firstname} ${user.lastname}`;
    }

    return (
        <>
        <h1>
            hello,{addname()}
        </h1>
        </>
    );
}

export default Formatuser;