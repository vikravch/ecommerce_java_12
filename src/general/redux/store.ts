import {combineReducers} from "redux";
// @ts-ignore
import {composeWithDevTools} from "redux-devtools-extension";
import authReducer from "../../pages/auth/store/reducers/authReducer";
import {configureStore} from "@reduxjs/toolkit";
import regReducer from "../../pages/auth/store/reducers/regReducer";
import restorePasswordReducer from "../../pages/auth/store/reducers/restorePasswordReducer";

//List of reducers!!!
const rootReducer = combineReducers({
    auth: authReducer,
    registration: regReducer,
    restorePassword: restorePasswordReducer,
    // landingPage
    // profile

})

export const setupSore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupSore>
export type AppDispatch = AppStore[`dispatch`]
