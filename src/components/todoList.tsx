import React from 'react'
import { useAppSelector} from "../redux/store";
import TodoListComponent from "./todoLictComponent";

const TodoList: React.FC=()=>{
    const sort=useAppSelector(state=>state.todo.sort)
    const todos=useAppSelector(state=>state.todo.todos)
    return(
        <div className='list'>
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