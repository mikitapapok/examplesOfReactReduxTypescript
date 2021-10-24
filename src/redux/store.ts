import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./rootReducer";
import{useDispatch,useSelector,TypedUseSelectorHook} from "react-redux";

export const store=configureStore({
    reducer: rootReducer
})
export type RootState = ReturnType<typeof store.getState>
export  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()