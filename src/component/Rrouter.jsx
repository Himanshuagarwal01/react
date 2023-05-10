import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Aboutpage from "./Aboutpage";
import Accesibility from "./Accesibility";
import Api from "./Api";
import Button from "./Button";
import Button2 from "./Button2";
import Cards from "./Cards";
import Chat from "./Chat";// kush aur render ho rha h 
import CleanUp from "./CleanUp";
import Useeffect from "./Useeffect";
import Usememo from "./Usememo";
import Usereducer from "./Usereducer";
import Usestate from "./Usestate";
import UsestateArray from "./UsestateArray";
import Usecallback from "./Usecallback";
import Temperature from "./Temperature";
import Sepcounter from "./Sepcounter";
import Img from "./Img";
import Adding from "./Adding";
import Form from "./Form";
import Focus from "./Focus";
import Formatname from "./Formatname"
import Div from "./Div";
import Displaydata from "./Displaydata";
import Todaydate from "./Date";
import Customhook from "./Customhooks";
import Conditionalrendering from "./Conditionalrendering";
import Statelifestyle from "./Statelifestyle";
import Counter from "./Counter";
import Uncontrolled from "./Uncontrolles";
import Props from "./Props";
import Propsrender from "./Propsrender";

 


function Rrouter(){
  return(
 <>
  
<Router>
        <div className="nav">
            
                <ul>
                 <li><Link to="Div">Div</Link> </li>
                    <li>
                        <Link to="/Aboutpage">Aboutpage</Link>
                    </li>
                    <li>
                        <Link to="/Accesibility">Accesibility</Link>
                    </li>
                     <li><Link to="/Api">Api</Link> </li>
                     <li><Link to="/Button">Button</Link> </li>
                     <li><Link to="/Button2">Button2</Link> </li>
                     <li><Link to="/Cards">Cards</Link> </li>
                     <li><Link to="/Chat">Chat</Link> </li>
                     <li><Link to="/CleanUp">CleanUp</Link> </li>
                     <li><Link to="/Useeffect">Useeffect</Link> </li>
                     <li><Link to="/Usememo">Usememo</Link> </li>
                     <li><Link to="/Usereducer">Usereducer</Link> </li>
                     <li><Link to="/Usestate">Usestate</Link> </li>
                     <li><Link to="/UsestateArray">UsestateArray</Link> </li>
                     <li><Link to="/Usecallback">Usecallback</Link> </li>
                     <li><Link to="/Temperature">Temperature</Link> </li>
                     <li><Link to="/Sepcounter">Sepcounter</Link> </li>
                     <li><Link to="/Img">Img</Link> </li>
                     <li><Link to="/Adding">Adding</Link> </li>
                     <li><Link to="/Form">Form</Link> </li>
                     <li><Link to="/Focus">Focus and blur</Link> </li>
                     <li><Link to="Formatname">EmbeddingexpInjsx</Link> </li>
                     <li><Link to="Displaydata">Displaydata</Link> </li>
                     <li><Link to="Todaydate">Date</Link> </li>
                     <li><Link to="/Customhooks">Custom hook</Link> </li>
                     <li><Link to="/Conditionalrendering">Conditional rendering</Link> </li>
                     <li><Link to="/Statelifestyle">Statelifestyle</Link> </li>
                     <li><Link to="/Counter">Counter</Link> </li>
                     <li><Link to="/Uncontrolles">Uncontrolled</Link> </li>
                     <li><Link to="/Propsrender">Propsrender</Link> </li>
                     <li><Link to="/Props">Props</Link> </li>
                     
                </ul>
            
<Routes>
            <Route  path='/Div' Component={Div}/>
            <Route  path='/Aboutpage' Component={Aboutpage}/>
            <Route  path='/Accesibility' Component={Accesibility}/>
            <Route  path='/Adding' Component={Adding}/>
            <Route  path='/Api' Component={Api}/>
            <Route  path='/Button' Component={Button}/>
            <Route  path='/Button2' Component={Button2}/>
            <Route  path='/Cards' Component={Cards}/>
            <Route  path='/Chat' Component={Chat}/>
            <Route  path='/CleanUp' Component={CleanUp}/>
            <Route  path='/Useeffect' Component={Useeffect}/>
            <Route  path='/Usememo' Component={Usememo}/>
            <Route  path='/Usereducer' Component={Usereducer}/>
            <Route  path='/Usestate' Component={Usestate}/>
            <Route  path='/UsestateArray' Component={UsestateArray}/>
            <Route  path='/Usecallback' Component={Usecallback}/>
            <Route  path='/Temperature' Component={Temperature}/>
            <Route  path='/Sepcounter' Component={Sepcounter}/>
            <Route  path='/Img' Component={Img}/>
            <Route  path='/Adding' Component={Adding}/>
            <Route  path='/Form' Component={Form}/>
            <Route  path='/Focus' Component={Focus}/>
            <Route  path='/Formatname' Component={Formatname}/>
            <Route  path='/Displaydata' Component={Displaydata}/>
            <Route  path='/Todaydate' Component={Todaydate}/>
            <Route  path='/Customhooks' Component={Customhook}/>
            <Route  path='/Conditionalrendering' Component={Conditionalrendering}/>
            <Route  path='/Statelifestyle' Component={Statelifestyle}/>
            <Route  path='/Counter' Component={Counter}/>
            <Route  path='/Uncontrolles' Component={Uncontrolled}/>
            <Route  path='/Propsrender' Component={Propsrender}/>
            <Route  path='/Props' Component={Props}/>
            
            
            
            </Routes>
       
        </div>
        </Router>
 </>
  );
}

export default Rrouter;
