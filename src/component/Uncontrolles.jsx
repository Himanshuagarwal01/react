import React, { useRef, useState } from "react";

const Uncontrolled=()=>{

  const luckyname=useRef(null);
  const [show,setshow]=useState(false);

  const handesubmit=(event)=>{
    event.preventDefault();
    const name=(luckyname.current.value);
    name===""?alert("pls fill the data "):setshow(true);
    luckyname.current.style.color="blue";
    // luckyname.style.background-color="blue";

  }

  return(
    <div>
     <form action="" onSubmit={handesubmit}>
      <div>
          <label for="name"> Enter your lucky name </label>
          <input type="text" id="name" ref={luckyname} autoComplete="off"/>
      </div>
      <br/>
      <button>Submit</button>
     </form>
     <p>{show?`Your enter name is ${luckyname.current.value}`: ""}</p>
    </div>
  )

}

export default Uncontrolled;