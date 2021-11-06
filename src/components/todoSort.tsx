import React from "react";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {addNewCompleted} from "../redux/reducer";

const TodoSort:React.FC=()=>{
    const sort=useAppSelector(state=>state.todo.sort)
    const dispatch=useAppDispatch()
    const setNewToggle=(e:React.MouseEvent)=>{
        dispatch(addNewCompleted(e.currentTarget.innerHTML.toLocaleLowerCase()))
    }
    return(
        <div className='button-block'>
            <button className={sort==='all'?'currentSort':'button-block__element'} onClick={setNewToggle} >All</button>
            <button className={sort===true?'currentSort':'button-block__element'}  onClick={setNewToggle}>Completed</button>
            <button className={!sort?'currentSort':'button-block__element'}  onClick={setNewToggle}>Incompleted</button>
        </div>
    )
}

export default TodoSort