import React from "react";
import {Route,Routes} from "react-router-dom";
import About from "./About";
import Ccontact from "./Ccontact";
import Usereducer2 from "./Usereducer2";


function Router(){
    return(
        <>

        <Routes>
            <Route exact path='/' Component={About} />
            <Route path="/Ccontact" Component={Ccontact}/>
            <Route path="/Usereducer2" Component={Usereducer2}/>
        </Routes>
        {/* <h1> Hi my name is himanshu agarwal</h1> */}
        {/* <About/>
        <Ccontact/> */}
        </>
    );
}

export default Router;