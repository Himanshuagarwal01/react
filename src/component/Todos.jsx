import {memo} from "react";

const Todos=({todos,addtodos})=>{
  console.log("child render");
  return (
    <>
    <h2>MY Todos</h2>
    {todos.map((todo,index)=>{
      return (<p key={index}>{todo +index} </p>);
    })}

    <button onClick={addtodos}>Add todos</button>
    </>
  );
}

export default memo(Todos);

//Here memo is not the useMemo hook this is the higher prior component 