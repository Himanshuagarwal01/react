import React from "react";
// import hawa from "../images/ima.jpg";
const hawa="https://picsum.photos/250/300";
const hawa1="https://picsum.photos/220/300";
function Img(){
    return (
        <>
        <img src={hawa} alt="" className="hawamahal">
        </img> 
        <img src={hawa1} alt="" className="hawamahal">
        </img>
        </>
    )
}
export default Img;