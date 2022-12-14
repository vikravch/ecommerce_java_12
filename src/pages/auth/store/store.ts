import {applyMiddleware, combineReducers, createStore} from "redux";
// @ts-ignore
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    authReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware((thunk))))