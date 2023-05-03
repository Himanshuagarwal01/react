import React ,{useState}  from "react";
import ChildA from "./ChildA"; 

 function Propsrender (){
 
  const [count,setcount]=useState(0);

  const updatemycount=(num)=>{
    setcount (num);
  }

  return(
    <ChildA count={count} updateit={updatemycount}/>
  );
}

export default Propsrender;