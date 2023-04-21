import React from "react";


function Props2(props){
    return (
        <div>
            <img 
               src={props.author1.imgurl}
               alt="kitty im"
            />
            <p>
                {props.author1.name}
            </p>
            <h1>
                {props.text}
            </h1>
        </div>
    )
}




export default Props2;