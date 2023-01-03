import {combineReducers} from "redux";
import signInReducer from "../../pages/auth/store/reducers/signInReducer";
import {configureStore} from "@reduxjs/toolkit";
import signUpReducer from "../../pages/auth/store/reducers/signUpReducer";
import restorePasswordReducer from "../../pages/auth/store/reducers/restorePasswordReducer";
import blogSlice from "../../pages/blog/store/reducers/blogSlice";
import blogTitleSlice from "../../pages/blog/store/reducers/blogTitleSlice";
import blogBigTitleSlice from "../../pages/blog/store/reducers/blogBigTitleSlice";

//List of reducers!!!
const rootReducer = combineReducers({
    signIn: signInReducer,
    signUp: signUpReducer,
    restorePassword: restorePasswordReducer,
    blog: blogSlice,
    blogTitle: blogTitleSlice,
    blogBigTitle: blogBigTitleSlice,
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
