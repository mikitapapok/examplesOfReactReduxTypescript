import React, {PropsWithChildren} from "react";
import {useAppDispatch} from "../redux/store";
import {removeSomeTodo, switchState} from "../redux/reducer";

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
        <div className={`list-component `}>
            <input type='checkbox'  onChange={toggleState} checked={child.completed?true:false}/>
            <p className={child.completed ? 'completed' : 'incompleted'}>{child.title}</p>
            <button className='delete-button' onClick={removeItem}>delete Todo</button>
        </div>
    )
}


export default TodoListComponent;