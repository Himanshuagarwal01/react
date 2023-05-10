import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import About from "./About";
import Ccontact from "./Ccontact";
import Usereducer2 from "./Usereducer2";
import Stopwatch from "./Stopwatch";


function Routers(){
    return(
        <>

        {/* <Routes>
            <Route exact path='/' Component={About} />
            <Route path="/Ccontact" Component={Ccontact}/>
            <Route path="/Usereducer2" Component={Usereducer2}/>
        </Routes> */}
        {/* <h1> Hi my name is himanshu agarwal</h1> */}
        {/* <About/>
        <Ccontact/> */}

<Router>
        <div className="nav">
            <nav>
                <ul>
                <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Ccontact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/Usereducer2">Usereducer2</Link>
                    </li>
                    <li>
                        <Link to="/Stopwatch">Stopwatch</Link>
                    </li>
                    
                </ul>
            </nav>
<Routes>
            <Route  path='/About' Component={About}>
            </Route>
            <Route path="/Ccontact" Component={Ccontact} > 
            </Route>
            < Route path="/Usereducer2" Component={Usereducer2}>
            </Route>
            < Route path="/Stopwatch" Component={Stopwatch}>
            </Route>
           
            </Routes>
       
        </div>
        </Router>
            
        </>
    );
}

export default Routers;