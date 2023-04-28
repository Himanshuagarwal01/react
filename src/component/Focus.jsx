import React from "react";

function Focus(){

    function handlefocus(){
        document.getElementById("links").focus();
    }

    function handleblur(){
        document.getElementById("links").blur();
    }
    return (

        <>
        <div className="focus">
          <h1>the Element object</h1>
          <h2>The focus() and blur() Methods</h2>
          <a id="links" href="https://www.google.com/">Visit Google.com</a>
          <p>click the buttons to give or remove focus from the above link</p>
          <input type="button" 
           onClick={handlefocus}
           value="Get Focus"
          />
          <input type="button" 
           onClick={handleblur}
           value="Get Blur"
          />
          </div>
        </>
    );
}

export default Focus;
