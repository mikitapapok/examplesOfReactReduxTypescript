import React, {useEffect, useState} from 'react'
import {useAppDispatch, useAppSelector} from "../redux/store";
import {createNewTodo, TodoItem} from "../redux/reducer";
import TodoListComponent from "./todoLictComponent";

const TodoList: React.FC=()=>{
    const dispatch=useAppDispatch()
    const sort=useAppSelector(state=>state.todo.sort)
    const todos=useAppSelector(state=>state.todo.todos)
    const [info,setInfo]=useState<Array<TodoItem>>([])
    useEffect(()=>{
       dispatch(createNewTodo())
    },[dispatch])

    return(
        <div>
            {todos?todos.filter(e=> {
                if(sort==='all'){
                    return e
                }else{
                    return e.completed === sort
                }

            }).map(e=> {
               return  <TodoListComponent key={e.id} children={e}/>
            }):null}
        </div>

    )
}


export default TodoList;