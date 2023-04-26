import React from "react";

function Splitpanel(props){
    return(
      <div className="splitpanel">
        <div className="split-left">{props.left}</div>
        <div className="split-right">{props.right}</div>
      </div>
    );
}

export default Splitpanel;