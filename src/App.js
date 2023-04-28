import React from "react";
import Div from "./component/Div"; 
import Button from "./component/Button";
import Aboutpage from "./component/Aboutpage";
import Adding from "./component/Adding";
import Img from "./component/Img";
import Formatname from "./component/EmbeddingexpInjsx";
import Displaydata from "./component/Displayingdata";
import Conditionalrendering from "./component/Conditionalrendering";
import Todaydate from "./component/Date";
import Props from "./component/Props";
import Props2 from "./component/Props2";
import contacts from "./component/contact";
import Cards from "./component/Cards";
import Button2 from "./component/Button2";
import Statelifestyle from "./component/Statelifestyle";
import Form from "./component/Form";
import Counter from "./component/Counter";
import Sepcounter from "./component/Sepcounter";
import Temperature from "./component/Temperature";
import Splitpanel from "./component/Splitpanel";
import Conttt from "./component/Conttt";
import Chat from "./component/Chat";
import Router from "./component/Router";
import Accesibility from "./component/Accesibility";
import Focus from "./component/Focus";
import Usestate from "./component/Usestate";
import UsestateArray from "./component/UsestateArray";



const object={
  text:"I hope you enjoy learning react!",
  author:{
      name:"Hello Aditi",
      imgurl:"https://i.imgur.com/Jvh1OQmb.jpg",
  }
};

function createcontact(contacts){
  return(
    <Cards
    id={contacts.id}
    key={contacts.id}
    name={contacts.name}
    imageurl={contacts.imageurl}
    phone={contacts.phone}
    email={contacts.email}
    />
  ) 
};





function MyApp(){
  return (
  <>
  <Div/>
  <Button/>
  <Aboutpage/>
  <Adding/>
  
  <Img/>
  
 
  <Formatname/>
  <Displaydata/>
  <Conditionalrendering/>
  <Todaydate/>
  <Props name="Himanshu agarwal"/>
  <Props2 
      text1={object.text}
      author1={object.author}  
  />
  {contacts.map(createcontact)}
  <Button2/>
  <Statelifestyle/>
  <Form/>
  <Counter/>
  <Sepcounter/>
  <Temperature/>
  <Splitpanel left={<Conttt/>}
  right={<Chat/>}/>
  <Router/>
  <Accesibility/>
  <Focus/>
  <Usestate/>
  <UsestateArray/>
  
</>
  )
}

export default  MyApp;

