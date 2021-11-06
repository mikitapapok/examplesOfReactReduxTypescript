import React, {useState} from "react";
import {useAppDispatch} from "../redux/store";
import {addNewItem, createNewTodo} from "../redux/reducer";


const InputForm:React.FC=()=>{
    const dispatch=useAppDispatch()
    const [text,setText]=useState<string>('')
    const addText=(element:React.BaseSyntheticEvent)=>{
        setText(element.target.value)
    }
    const createTodo=(e:React.BaseSyntheticEvent)=>{
        e.preventDefault()
        if(text.trim().length){
            dispatch(addNewItem(text))
        }

        setText('')
    }

    const getTodosFromServer=(e:React.BaseSyntheticEvent)=>{
        e.preventDefault()
        dispatch(createNewTodo())
    }
   return( <form className='input-form'>
           <input className='input-form-input' onChange={addText} value={text} />
           <button className='input-form-button add-button'
                   onClick={createTodo}>Add some todo</button>
           <button className='input-form-button get-button'
                   onClick={getTodosFromServer}>Get todos from server</button>
   </form>


   )
}

export default InputForm;