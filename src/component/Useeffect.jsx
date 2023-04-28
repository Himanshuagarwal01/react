import React, { useEffect, useState } from "react";

const Useeffect=()=>{
    const[count,setcount]=useState(0);

    const handleclick=(()=>{
        setcount(count+1)
    })

    useEffect(()=>{
        console.log(" I am inside")
        if (count>=1){
        document.title=`Chats(${count})`
    }
    else{
        document.title=`Chats`
    }
    },[count]);

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