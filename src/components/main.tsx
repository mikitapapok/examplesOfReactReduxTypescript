import React, {useEffect, useState} from "react";
import TodoList from "./todoList";
import {useAppDispatch} from "../redux/store";
import {addNewId, addNewItem, addTodo} from "../redux/reducer";
import TodoSort from "./todoSort";






const Main:React.FC=()=>{


    const dispatch=useAppDispatch()
    const [text,setText]=useState<string>('')


    const addText=(element:React.BaseSyntheticEvent)=>{
        setText(element.target.value)
    }
    const createTodo=()=>{

                dispatch(addNewItem(text))

        setText('')


    }

    return(
        <div>
            <input onChange={addText} value={text} />
            <button onClick={createTodo}>Add some todo</button>
            <p>{text}</p>
            <div>
                <TodoSort/>
                    <TodoList />

            </div>

        </div>
    )
}

export default Main;