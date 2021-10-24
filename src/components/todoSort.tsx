import React, {HTMLAttributes} from "react";
import {useAppDispatch} from "../redux/store";
import {addNewCompleted} from "../redux/reducer";

const TodoSort:React.FC=()=>{
    const dispatch=useAppDispatch()
    const setNewToggle=(e:React.MouseEvent)=>{
        dispatch(addNewCompleted(e.currentTarget.innerHTML.toLocaleLowerCase()))
    }
    return(
        <div className='button-block'>
            <button onClick={setNewToggle} >All</button>
            <button onClick={setNewToggle}>Completed</button>
            <button onClick={setNewToggle}>Incompleted</button>
        </div>
    )
}

export default TodoSort