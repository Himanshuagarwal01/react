import React,{useEffect, useState} from "react";
import { FcApproval } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Api=(()=>{

  const [users,setuser]=useState([]);

  const getusers=async ()=>{
    const promise =await fetch('https://jsonplaceholder.typicode.com/users');
   
    setuser(await promise.json());
    // console.log(data);
  }

    useEffect(()=>{
      getusers(); 
      
    },[])

    return (
        <>
        <div className="focus">
           <h1 > Github User's data </h1>
           {
            users.map((curEle)=>{
              return (
                <div>
                 
                  <ol> <h1>{curEle.id}</h1>
                  <p><strong>Name:   </strong> <FaGithub/>{ curEle.name } <FcApproval/></p>
                  <span><strong>Username:</strong>{ curEle.username }</span>
                  <span><strong>Email:</strong>{ curEle.email }</span>
                  <span><strong>Address:</strong>{ curEle.address.city }</span>
                  
                  </ol>
                </div>
              )
            })
           }
        </div>
        </>
    )
})

export default Api;

//first i have made the document using api fetching 

//after now, i have updated the document in which i have added the icon after the username . 

// by importing the react icon after installing the react icon using following command------>
//              npm install react-icons --save

//After import you need to use as an component 