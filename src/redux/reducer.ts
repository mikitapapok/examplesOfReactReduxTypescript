import {
    createSlice,
    createAsyncThunk,
    PayloadAction
} from "@reduxjs/toolkit";

import {store} from "./store";

export interface TodoItem{
    userId: number|string,
    id: number,
    title: string,
    completed:boolean
}
const currentHref:string='https://jsonplaceholder.typicode.com/todos?_limit=5'

export const createNewTodo=createAsyncThunk(
    'todo/createNewTodo',
    async function(_,{rejectWithValue,dispatch}){
        const response= await fetch(currentHref);
        const data:TodoItem[]=await response.json()
        return data
    }
)

export const removeSomeTodo=createAsyncThunk(
    'todo/removeSomeTodo',
    async function (id:number,{dispatch}){
        const deleteHref:string=`https://jsonplaceholder.typicode.com/todos/${id}`
        const resp=await fetch(deleteHref,{
            method: 'DELETE'
        })
        dispatch(deleteTodo(id))
    }
)

export const  switchState=createAsyncThunk<any,any,{state: ReturnType<typeof store.getState>}>(
    'todo/switchState',
    async function (id,{dispatch,getState}){
        const todo:TodoItem|undefined=getState().todo.todos.find(e=>e.id===id)

        const resp=await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({completed: !todo?.completed})
        })
        console.log(todo)
        dispatch(toggleComplete(id))
    }
)

export const addNewItem=createAsyncThunk<any,string,{state: ReturnType<typeof store.getState>}>(
    'todo/addNewItem',
    async function  (title,{dispatch,getState}){
        dispatch(addNewId())


        const newItem:TodoItem={
            userId: '1',
            id: getState().todo.currentId,
            title: title,
            completed:false
        }

         await fetch('https://jsonplaceholder.typicode.com/todos',{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })

        dispatch(addTodo(newItem))

    }
)
type MyState={
    todos: TodoItem[]|string,
    currentId:string|number,
    sort:string|boolean,
    status:string
}
const todosReducer=createSlice({
    name: 'todo',
    initialState:{
        todos:  [] as TodoItem[],
        currentId: 547 as number,
        sort: 'all' as string|boolean,
        status:'' as string
    },
    reducers:{
            addTodo:(state:any,action:PayloadAction<TodoItem>)=>{

                  state.todos=[...state.todos,action.payload]

            },
            deleteTodo:(state:any,action:PayloadAction<number>)=>{
                state.todos= state.todos.filter((e:TodoItem):boolean=>e.id!==action.payload)
            },
            addNewId:(state:any)=>{
                        state.currentId=state.currentId+1;
            },
            toggleComplete:(state:any,action:PayloadAction<number>)=>{
                const currentItem:TodoItem= state.todos.find((e:TodoItem)=>e.id===action.payload)
                currentItem.completed=!currentItem.completed
            },
            addNewCompleted:(state:any,action:PayloadAction<string|boolean>)=>{
                if(action.payload==='completed'){
                    state.sort=true
                }else  if(action.payload==='incompleted'){
                    state.sort=false
                }else{
                    state.sort=action.payload
                }


            }
    },
    extraReducers:{
        [createNewTodo.pending.type]:(state:any)=>{
            state.status='load'
        },
        [createNewTodo.fulfilled.type]:(state:any,action:PayloadAction<any>)=>{
            state.todos=[...state.todos,...action.payload]
}
    }

});
export const {addTodo,deleteTodo,addNewId,toggleComplete,addNewCompleted}=todosReducer.actions
export default todosReducer.reducer


