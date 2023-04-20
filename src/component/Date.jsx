import React from "react";

function Todaydate(){
    return(
        <>
        <div>
            <h1>Current Date is :</h1>
        </div>
        <h2>
           {new Date().toLocaleDateString()}
        </h2>
        </>
    );
}

setInterval(Todaydate,3000);

export default Todaydate;