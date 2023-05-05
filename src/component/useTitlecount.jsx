import useEffect from "react";

const useTitlecount =(count)=>{
  
    useEffect(()=>{
      console.log(" I am inside")
      if (count>=1){
      document.title=`Chats(${count})`
  }
  else{
      document.title=`Chats`
  }
  },[count]);
}

export default useTitlecount;