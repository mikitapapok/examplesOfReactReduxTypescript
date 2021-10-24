import React, {useEffect, useState} from 'react';
import Main from "./components/main";
interface TodoItem{
    'userId': number |string,
    'id': number,
    'title': string,
    'completed': boolean
}
const href:string='https://jsonplaceholder.typicode.com/todos?_limit=4'
const App:React.FC=()=>{
  const [data,setData]=useState<Array<TodoItem>>([])
  useEffect(()=>{
         async function getTodo(){
             const req= await fetch(href)
             const finalData=await  req.json();
             setData(finalData)
         }

         getTodo()
  },[])

  return(
      <Main />
  )

}

export default App ;
