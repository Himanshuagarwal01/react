import React, { useCallback, useState } from "react";
import Todos from "./Todos";

const Usecallback=()=>{
  const [count,setcount]=useState(0);
  const [todos,settodos]=useState([]);

  const increment =()=>{
    setcount(count+1);
  }

  const addTodos=useCallback(()=>{
    settodos((prev)=>[...prev,`newentry`]);
  },[]);

 

  return(
    <>
    <Todos todos={todos} addtodos={addTodos}/><br/>
    {count}
    <button onClick={increment}>+</button>
    </>
  );
}

export default Usecallback;
//useCallback hook is similar to useMemo hook
//usecallback use to return the memoized function whereas usememo use to return the memoized value ;
//But both use to do the same task that is to increase the performance of the app.

//useCallback is used to solve the problem that is :----
            //when you where rendering the 
//component then along with that component
//another component use to render. To solve this problem useCallback is used 

