import React from "react";

function Accesibility(){

    function handleclick(){
        alert('Button is click');
    }

    return (
   //WAI-ARIA
   //Semantic HTML
   //labeling
   //Focus Control
   <>
   <label htmlFor="name1">Enter your name</label>
    <input id="name1" type="text" placeholder="Enter your name " aria-label="Name"  aria-required="true"></input>
    <table>
        <tbody>
            <th>Company Employee</th>
            <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
            </tr>
            <tr>
                <td>Alfreds Futterkiste</td >
                <td>Maria Anders</td >
                <td>Germany</td >
            </tr>
            <tr>
                <td>Centro commercial<br/>
                     Moctezuma</td>
                <td>Francisco <br/>
                    Chang</td>
                <td>Mexico</td>
            </tr>
        </tbody>
    </table><br/>
    <button onClick={handleclick}>Click me </button>
   </>
    );
}

export default Accesibility;