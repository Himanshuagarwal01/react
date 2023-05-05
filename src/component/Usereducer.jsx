import React, { useReducer } from "react";


// const initialstate=0;
const reducer = (state, action) => {
  // console.log(action);
  // console.log(state.age);

  
  // if(action.type === "INCREMENT"){
  //   return state.age + 1;
  // }
  // if(action.type === "DECREMENT"){
  //   return state.age - 1;
  // }



  switch(action.type){
    case "INCREMENT": 
   
    state.age=state.age + 1;
    if(state.age<0){
      return {
        age:0,
        teen:"Child",
        
      };
      
    }
    else if (state.age<18){
      return{
        age: state.age,
        teen :"Child",
      };
    }
    else{
      return {
        age:state.age,
        teen:"Adult"
      };
      
    }
     
     
    case "DECREMENT": 
    state.age=state.age - 1;
    if(state.age<0){
      return {
        age:0,
        teen:"Child"
      };
    }
    else if (state.age>17){
      return{
        age: state.age,
        teen :"Adult",
      };
    }
    else{
      return {
        age:state.age,
        teen:"Child"
      }
    }
        
    default :
    return{
      age:state.age,
      teen:state.teen
    } ;
   }


 
  //this function also need something to return 
};


const Usereducer = () => {

  // const [count, setcount] = useState(0);
  const[state,dispatch] =useReducer(reducer, ({age:1,teen:"Child"}));
  //useReducer returns two 

  // let[teen,setteen]=useState("child");


  return (
    <>
      <p>{state.teen} {state.age}</p>
      <div>
        <button onClick={() => dispatch({type:"INCREMENT"})}>Inc</button>
        <button onClick={() => dispatch({type:"DECREMENT"})}>Dec</button>
      </div>
    </>
  );
};

export default Usereducer;

//usereducer hook is generally similar to useState but when it comes to handle multiple states then where we prefer to use useReducer hook.

// useReducer is a pure function that take in a state and action and return a new state .

//The useReducer hook uses the same concept as the reducers in Redux. It is basically a pure function, with no side-effects.

//pure function -->1. the function should always return the same output if the same arguments are passed in

//syntax-->
// const[state,dispatch]= useReducer(reducer function,initialstate)
//dispatch is used to trigger action method 
//dispatch has type property 
