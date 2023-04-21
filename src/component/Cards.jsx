import React from "react";

function Cards(props){
    return (
        <>
     <div>
        <h1>
            Id is:{props.id}
        </h1>
        <h1 >Name is : {props.name}</h1>
     </div>
     <div> 
        <img
     src={props.imageurl}
     alt='Aditi '
/>
         </div>
     </>
    );
}

export default Cards;