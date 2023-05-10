import React from "react";

// import Aboutpage from "./component/Aboutpage";
// import Props from "./component/Props";
// import Props2 from "./component/Props2";
// import contacts from "./component/contact";
// import Cards from "./component/Cards";
// import Splitpanel from "./component/Splitpanel";
// import Conttt from "./component/Conttt";
// import Chat from "./component/Chat";
import Routers from "./component/Routers";
// import Accesibility from "./component/Accesibility";
// import ComA from "./component/ComA";
// import ComB from "./component/ComB";
import Rrouter from "./component/Rrouter";
// const Firstname=createContext();
// const Lastname=createContext();
// const Nextfname=createContext();
// const NextLname=createContext();

// const object={
//   text:"I hope you enjoy learning react!",
//   author:{
//       name:"Hello Aditi",
//       imgurl:"https://i.imgur.com/Jvh1OQmb.jpg",
//   }
// };

// function createcontact(contacts){
//   return(
//     <Cards
//     id={contacts.id}
//     key={contacts.id}
//     name={contacts.name}
//     imageurl={contacts.imageurl}
//     phone={contacts.phone}
//     email={contacts.email}
//     />
//   ) 
// };
function MyApp(){
  return (
  <>
  <Routers/>
  {/* <Aboutpage/> */}
  {/* <Props name="Himanshu agarwal"/>
  <Props2 
      text1={object.text}
      author1={object.author}  
  />
  {contacts.map(createcontact)}
  <Splitpanel left={<Conttt/>}
  right={<Chat/>}/>
  <Accesibility/>
  <Firstname.Provider value={"Himanshu"}>
    <Lastname.Provider value={"Agarwal"}>
      <ComA/>
    </Lastname.Provider>
  </Firstname.Provider> */}

  {/* <Nextfname.Provider value={"Uma Shankar"}>
    <NextLname.Provider value={"Gupta"}>
      <ComB/>
    </NextLname.Provider>
  </Nextfname.Provider> */}
  <Rrouter/>
</>
  )
}

export default  MyApp;
// export {Firstname,Lastname};
// export {Nextfname,NextLname};

