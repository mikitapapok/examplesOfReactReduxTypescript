import React, {PropsWithChildren} from "react";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {removeSomeTodo, switchState, toggleComplete} from "../redux/reducer";

interface IProps{
    userId: number|string,
    id: number,
    title: string,
    completed:boolean
}


const  TodoListComponent:React.FC=({children}:PropsWithChildren<any>)=>{
    const dispatch=useAppDispatch()

    const child: IProps=children
    const removeItem=()=>{
        dispatch(removeSomeTodo(child.id))
    }
    const toggleState=()=>{
        dispatch(switchState(child.id))
    }
    return(
        <div className={child.completed?'completed':'incompleted'}>
            <input type='checkbox'  onChange={toggleState} checked={child.completed?true:false}/>
            <p>{child.title}</p>
            <button onClick={removeItem}>delete Todo</button>
        </div>
    )
}


export default TodoListComponent;