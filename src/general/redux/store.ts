import {combineReducers} from "redux";
// @ts-ignore
import {composeWithDevTools} from "redux-devtools-extension";
import {configureStore} from "@reduxjs/toolkit";
import {cartReducer} from "../../pages/cart/store/reducers/cartReducer";
import {checkoutReducer} from "../../pages/cart/store/reducers/checkoutReducer";
// import authReducer from "../../pages/auth/store/reducers/authReducer";
//
// import regReducer from "../../pages/auth/store/reducers/regReducer";
// import restorePasswordReducer from "../../pages/auth/store/reducers/restorePasswordReducer";

//List of reducers!!!
const rootReducer = combineReducers({
    // auth: authReducer,
    // registration: regReducer,
    // restorePassword: restorePasswordReducer,
    // landingPage
    // profile
    cart: cartReducer,
    checkout: checkoutReducer

})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore[`dispatch`]