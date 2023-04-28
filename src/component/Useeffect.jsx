import React, { useEffect, useState } from "react";

const Useeffect=()=>{
    const[count,setcount]=useState(0);

    const handleclick=(()=>{
        setcount(count+1)
    })

    useEffect(()=>{
        if (count>=1){
        document.title=`Chats(${count})`
    }
    else{
        document.title=`Chats`
    }
    })

    console.log(" hello outside")

    return (
        <>
            <h1> 
                {count}
            </h1>
            <button onClick={handleclick}>Click</button>
        </>
    );
}

export default Useeffect;