import React, { useState } from "react";

//This following code is about the changing the enter celsius temperature to fahrenhiet and vice versa.

function Temperature(){

    const[temperature,setemperature]=useState({celsius:0,fahrenhiet:0})

    function handleCelsius(event){
      setemperature({
        celsius:event.target.value ,
        fahrenhiet:(event.target.value * 9 / 5 + 32)
      })
    }

    function handleFahrenhiet(event){
      setemperature({
        celsius:((event.target.value - 32)*5/9) ,
        fahrenhiet:event.target.value
      })
    }

    return (
        <>
        <div className="container21">
        <h1>Temperature Converter</h1>
            <div id="boxx1">
                <h1>Celsius Temperature </h1>
                <input type="number"
                  value={temperature.celsius}
                  onChange={handleCelsius}
                >
                </input>
            </div>
            <div id="boxx2">
            <h1>Fahrenhiet Temperature</h1>
                <input type="number"
                 value={temperature.fahrenhiet} 
                 onChange={handleFahrenhiet}          
                 >
                </input>
            </div>
        </div>
        </>

    );
}

export default Temperature;