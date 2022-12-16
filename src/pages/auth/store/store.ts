import {combineReducers} from "redux";
// @ts-ignore
import {composeWithDevTools} from "redux-devtools-extension";

import authReducer from "./authReducer";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    authReducer
})

export const setupSore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupSore>
export type AppDispatch = AppStore[`dispatch`]