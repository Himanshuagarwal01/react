import React from "react";
 
//this lines of code describes Containment
// According to the Containment documentation the react use to prefare 

function Splitpanel(props){
    return(
      <div className="splitpanel">
        <div className="split-left">{props.left}</div>
        <div className="split-right">{props.right}</div>
      </div>
    );
}

export default Splitpanel;