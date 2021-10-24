import {combineReducers} from "@reduxjs/toolkit";
import todosReducer from './reducer'


export const rootReducer=combineReducers({
    todo: todosReducer
})