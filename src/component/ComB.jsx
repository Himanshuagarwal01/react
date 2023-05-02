import React ,{useContext} from "react";
import ComC from "./ComC";
import {Firstname,Lastname} from "../App";
// import {Nextfname,NextLname} from "../App";
const ComB=()=>{

    const fname=useContext(Firstname);
    const lname=useContext(Lastname);
    // const fnname=useContext(Nextfname);
    // const lnname=useContext(NextLname);

  return (
    <>
    <h4>
      Name in B component is: {fname}{lname}
    </h4>
    {/* <h2>
      other name is :{fnname}{lnname}
    </h2>
     */}
    <ComC/>
    </>
  );
}

export default ComB;