import {combineReducers} from "redux";
import signInReducer from "../../pages/auth/store/reducers/signInReducer";
import {configureStore} from "@reduxjs/toolkit";
import signUpReducer from "../../pages/auth/store/reducers/signUpReducer";
import restorePasswordReducer from "../../pages/auth/store/reducers/restorePasswordReducer";

//List of reducers!!!
const rootReducer = combineReducers({
    signIn: signInReducer,
    signUp: signUpReducer,
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
