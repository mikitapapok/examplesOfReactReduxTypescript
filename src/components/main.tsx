import React from "react";
import TodoList from "./todoList";
import TodoSort from "./todoSort";
import InputForm from "./inputForm";






const Main:React.FC=()=>{

    return(
        <div className='content'>
                <InputForm />
                <TodoSort/>
                <TodoList />


        </div>
    )
}

export default Main;